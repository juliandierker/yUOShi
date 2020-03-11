Studip.requestCredential = (options, credentialRequestCompleteCallback) => {
    if (!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
    }

    const config = ServiceConfiguration.configurations.findOne({
        service: "studip"
    });
    if (!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(
            new ServiceConfiguration.ConfigError());
        return;
    }

    const credentialToken = Random.secret();

    const loginStyle = OAuth._loginStyle('studip', config, options);

    // url to app, enters "step 1" as described in
    // packages/accounts-oauth1-helper/oauth1_server.js
    const loginPath = `_oauth/studip/?requestTokenAndRedirect=true&state=${
        OAuth._stateParam(
            loginStyle,
            credentialToken,
            options && options.redirectUrl
        )
    }`

    const loginUrl = Meteor.absoluteUrl(loginPath);

    OAuth.launchLogin({
        loginService: "studip",
        loginStyle: loginStyle,
        loginUrl: loginUrl,
        credentialRequestCompleteCallback: credentialRequestCompleteCallback,
        credentialToken: credentialToken
    });
}
