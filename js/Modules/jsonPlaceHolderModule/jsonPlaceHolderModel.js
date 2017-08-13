var jsonPlaceHolderModel = function ($http, Constants) {

    var getPosts = function (callback) {
        $http.get("https://jsonplaceholder.typicode.com/posts/1")
            .success(function (data, status) {
                callback(data, true)
            })
            .error(function (data, status) {
                    callback(data, false)
                }
            )
    };

    return {
        getPosts : getPosts
    }
};

jsonPlaceHolderModule.factory("jsonPlaceHolderModel", jsonPlaceHolderModel);

jsonPlaceHolderModel.$inject = ['$http','Constants'];
