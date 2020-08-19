Accounts.oauth.registerService("studip");
if (Meteor.isClient) {
  const loginWithStudip = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(
      callback
    );
    Studip.requestCredential(options, credentialRequestCompleteCallback);
  };
  Accounts.registerClientLoginFunction("studip", loginWithStudip);

  Meteor.loginWithStudip = (...args) => Accounts.applyLoginFunction("studip", args);
} else {
  const autopublishedFields = Studip.whitelistedFields.map(
    (subfield) => `services.studip.${subfield}`
  );

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}
