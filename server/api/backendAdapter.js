import { Meteor } from "meteor/meteor"
import { BackendAdapter, StudipOauthAuthenticationHandler } from "@xyng/yuoshi-backend-adapter-argonauts"
import RequestAdapter from "@xyng/yuoshi-request-adapter-axios"

const baseUrl = Meteor.settings.private.studip.url

const OAuthHandler = new StudipOauthAuthenticationHandler(
    {
        consumer: {
            key: Meteor.settings.private.oAuth.studip.key,
            secret: Meteor.settings.private.oAuth.studip.secret,
        },
        endpoints: {
            request_token: `${baseUrl}/dispatch.php/api/oauth/request_token`,
			access_token: `${baseUrl}/dispatch.php/api/oauth/access_token`,
			authorize: `${baseUrl}/dispatch.php/api/oauth/authorize`,
            callback: "",
        }
    },
    () => {

    }
)

function getAuth() {
    const user = Meteor.user()

    if (!user) {
        return {
            key: "",
            secret: "",
        }
    }

    const { accessToken, accessTokenSecret } = user.services.studip

    return {
        key: accessToken,
        secret: accessTokenSecret
    }
}

function createBackendAdapter() {
    const userConfig = getAuth()

    const OAuthHandler = new StudipOauthAuthenticationHandler(
        {
            consumer: {
                key: Meteor.settings.private.oAuth.studip.key,
                secret: Meteor.settings.private.oAuth.studip.secret,
            },
            endpoints: {
                request_token: `${baseUrl}/dispatch.php/api/oauth/request_token`,
                access_token: `${baseUrl}/dispatch.php/api/oauth/access_token`,
                authorize: `${baseUrl}/dispatch.php/api/oauth/authorize`,
                callback: "",
            }
        },
        () => {
            return userConfig
        }
    )

    const requestAdapter = new RequestAdapter(OAuthHandler, {
        base: baseUrl,
    })

    return new BackendAdapter(requestAdapter)
}

export default createBackendAdapter
