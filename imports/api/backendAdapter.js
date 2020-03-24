import { BackendAdapter, StudipOauthAuthenticationHandler } from "@xyng/yuoshi-backend-adapter-argonauts"
import RequestAdapter from "@xyng/yuoshi-request-adapter-axios"

if (!Meteor.isServer) {
    return
}

const baseUrl = Meteor.settings.private.studip.url

export const OAuthHandler = new StudipOauthAuthenticationHandler(
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
)

export const requestAdapter = new RequestAdapter(OAuthHandler, {
    base: baseUrl,
})
const studipAdapter = new BackendAdapter(requestAdapter)

export default studipAdapter
