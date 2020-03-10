Package.describe({
  summary: "Login service for Studip accounts",
  version: "1.0.0",
});

Package.onUse(api => {
  api.use("ecmascript");
  api.use("accounts-base", ["client", "server"]);
  // Export Accounts (etc) to packages using this one.
  api.imply("accounts-base", ["client", "server"]);
  api.use("accounts-oauth", ["client", 'server']);
  api.use("studip-oauth");
  api.imply("studip-oauth");

  api.addFiles("studip.js");
});
