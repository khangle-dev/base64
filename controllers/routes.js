'use strict';
var app = angular.module("app-root", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/decoder", {
            templateUrl : "views/decoder.html",
            controller : "decoderCtrl"
        })
        .when("/encoder", {
            templateUrl : "views/encoder.html",
            controller : "encoderCtrl"
        })
        .otherwise({
            templateUrl : "views/home.html",
            controller : "homeCtrl"
        });
});

