var AuthInterceptor = function ($q) {
    return {
        'request': function (config) {
            config.headers = config.headers || {};
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        'responseError': function (response) {
            return $q.reject(response);
        }
    };
};

angularJs.factory("AuthInterceptor", AuthInterceptor);

AuthInterceptor.$inject = ['$q'];
