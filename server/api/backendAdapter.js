import { Meteor } from "meteor/meteor"
import { BackendAdapter, StudipOauthAuthenticationHandler } from "@xyng/yuoshi-backend-adapter-argonauts"
import RequestAdapter from "@xyng/yuoshi-request-adapter-axios"

const baseUrl = Meteor.settings.private.studip.url
const apiPath = Meteor.settings.private.studip.apiPath

function getAuth(user) {
    user = user ?? Meteor.user()

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

/**
 * Create a BackendAdapter instance for the current user.
 *
 * @param user (Optional) Meteor User object to be used. This is only necessary for using this during the login process. If this is not provided, the current user will be fetched from the meteor connection
 * @returns {BackendAdapter<AxiosRequestConfig>}
 */
function createBackendAdapter(user) {
    const userConfig = getAuth(user)

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
        base: `${baseUrl}${apiPath}`,
    })

    return new BackendAdapter(requestAdapter)
}

export default createBackendAdapter
