// Npm.depends({
//     "@xyng/backend-adapter-studip": "1.0.0",
//     "@xyng/request-adapter-axios": "1.0.0"
// })

Package.describe({
  name: 'studip-oauth',
  version: '0.0.1',
  summary: 'OAuth handler for stud.IP',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('oauth', ['client', 'server']);
  api.use('oauth1', ['client', 'server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Studip');

  api.addFiles(
    ['studip_configure.html', 'studip_configure.js'],
    'client'
  );

  api.addFiles('studip_common.js', ['server', 'client']);

  api.addFiles('studip_server.js', 'server');
  api.addFiles('studip_client.js', 'client');
});
