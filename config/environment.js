/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://ember-trivia.firebaseio.com/',
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
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'self' http://locahost:4200",
      'script-src': "'self' http://localhost:4200 http://localhost:35729 https://*.firebaseio.com/", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://localhost:4200", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://localhost:4200 http://localhost:1337 http://localhost:35729 https://auth.firebase.com wss://*.firebaseio.com", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://localhost:4200", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
      'media-src': "'self'"
    }
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
