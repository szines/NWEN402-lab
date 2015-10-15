/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ryu-web-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // Vagrant map 8080 to default 80 in VM.
    // Nginx redirect manages the api requests.
    HOST: 'http://localhost:8080',
    contentSecurityPolicy: {
      'default-src': "'self' http://localhost:* wss://localhost:*",
      'connect-src':"'self' http://localhost:*/* http://localhost:*/*"
    }
  };

  if (environment === 'development') {
     //ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};