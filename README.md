wp-api-angularjs
================

AngularJS services to consume [WP-API v2](http://v2.wp-api.org/)

## Documentation

<http://shprink.github.io/wp-api-angularjs/>

## Authentication

This library only supports basic auth. OAuth1 not being suitable for JS clients (it would mean exposing key and password out of the open)

### Basic auth

Basic auth is only secured to use if used during the app run time and used with a secured connection to your Blog (via SSL).

#### During run time

Make sure your WP-API runs with an SSL certificate (https) otherwise this will expose your credentials at every request.

Display a form for users to connect and use the following code to register credentials:

```
.controller(function(WpApi){
    WpApi.setBasicCredentials(<login>, <password>);
});
```

#### During configuration

You can also set basic credentials during the configuration but use this should only be used for testing as it embed credentials in the application code.

```
.config(function(WpApiProvider){
    WpApiProvider.setBasicCredentials(<login>, <password>);
});
```

## Contribute

```
npm install
cp config.dist.json config.json

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page and the doc
npm run devserver
```

Open ```http://localhost:8080```
