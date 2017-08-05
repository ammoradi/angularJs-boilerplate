var AuthService = function ($localStorage) {

    function init(callback) {

    }

    function validate() {
        // using $q and promise
    }

    return {
        validate: validate,
        init: init
    }
};

angularJs.factory("AuthService", AuthService);

AuthService.$inject = ['$localStorage'];
