var angularJs = angular.module("angularJs",
    [
        'ui.router', 'ngStorage',
        'userModule'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/templates/landing.html',
                controller: 'LandingCtrl'
            });
        $urlRouterProvider.otherwise('/');
    })
    .run(function ($rootScope, $timeout, $location, $templateCache, AuthService, $state) {
        AuthService.init(function (data, status) {
            if (status) {
                // just a force to get some info . not using the callback
            }
        });

        $rootScope.$on('$viewContentLoaded', function () {

        });

        $rootScope.$on("$stateChangeError", function (event, current, previous, rejection) {

        });
        $rootScope.$on('$stateChangeStart', function (event, toUrl, fromUrl) {

        });

        $rootScope.$on("$stateChangeSuccess", function (event, current) {

        })


    })
    .service('scopeService', function () {
        return {
            safeApply: function ($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    $scope.$apply(fn);
                }
            }
        };
    })
    .filter('range', function () {
        return function (input, total) {
            total = parseInt(total);

            for (var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        };
    });


