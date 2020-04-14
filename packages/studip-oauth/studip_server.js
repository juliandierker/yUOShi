Studip.whitelistedFields = ['id', 'username'];

Studip.retrieveCredential = (credentialToken, credentialSecret) => {
    return OAuth.retrieveCredential(credentialToken, credentialSecret);
};

const studipUrl = Meteor.settings.private.studip.url

const urls = {
    requestToken: `${studipUrl}/dispatch.php/api/oauth/request_token`,
    authorize: `${studipUrl}/dispatch.php/api/oauth/authorize`,
    accessToken: `${studipUrl}/dispatch.php/api/oauth/access_token`,
    authenticate: function (oauthBinding, params) {
        return OAuth._queryParamsWithAuthTokenUrl(
            `${studipUrl}/dispatch.php/api/oauth/authorize`,
            oauthBinding,
            params
        );
    }
};

const onAuthDone = (oAuthBinding) => {
    const identity = oAuthBinding.get(`${studipUrl}/plugins.php/argonautsplugin/users/me`)

    // something went wrong
    if (identity.statusCode !== 200) {
        throw new Error("could not fetch user data after auth. server responded with an error")
    }

    let data;
    try {
        const parsed = JSON.parse(identity.content)

        if (!parsed) {
            throw new Error()
        }

        data = parsed.data;
        if (!data) {
            throw new Error()
        }
    } catch(e) {
        throw new Error("could not parse user data returned from server.")
    }

    const {
        id,
        meta: {
            avatar: { original }
        },
        attributes: {
            username,
            email,
            permission,
            "formatted-name": formatted_name,
            "given-name": first_name,
            "family-name": last_name,
            "name-prefix": prefix,
            "name-suffix": suffix,
        },
    } = data

    let role;
    switch (permission) {
        case "dozent":
        case "tutor":
            role = "teacher"
            break;
        default:
            role = "student"
    }

    return {
        serviceData: {
            id,
            username,
            profile: {
                name_info: {
                    prefix,
                    suffix,
                    first_name,
                    last_name,
                },
                name: formatted_name,
                avatar_original: original,
            },
            role,
            email,
            accessToken: OAuth.sealSecret(oAuthBinding.accessToken),
            accessTokenSecret: OAuth.sealSecret(oAuthBinding.accessTokenSecret)
        },
        options: {}
    }
}

OAuth.registerService('studip', 1, urls, onAuthDone);
