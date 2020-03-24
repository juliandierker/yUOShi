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
    const identity = oAuthBinding.get(`${studipUrl}/api.php/user`)

    const { user_id, avatar_original, email, perms, username, name: { formatted, given: first_name, family: last_name, prefix: title, suffix } } = identity.data

    let role;
    switch (perms) {
        case "dozent":
        case "tutor":
            role = "teacher"
            break;
        default:
            role = "student"
    }

    return {
        serviceData: {
            id: user_id,
            username,
            profile: {
                name_info: {
                    title,
                    suffix,
                    first_name,
                    last_name,
                },
                name: formatted,
                avatar_original,
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
