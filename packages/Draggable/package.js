Package.describe({
  name: "draggable",
  version: "0.0.1",
  // Brief, one-line summary of the package.
  summary: "Draggable In Meteor",
  // URL to the Git repository containing the source code for this package.
  // git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom("1.8");
  api.use("ecmascript");
  api.addFiles(["lib/Draggable.min.js"], "client", { bare: true });
  api.export("Draggable");
  api.export("goog");
});
