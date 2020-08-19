Template.configureLoginServiceDialogForStudip.helpers({
  siteUrl: function() {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForStudip.fields = function() {
  return [
    { property: "studipUrl", label: "Base URL of stud.IP (without trailing slash)" },
    { property: "key", label: "Consumer Key" },
    { property: "secret", label: "Consumer Secret" }
  ];
};
