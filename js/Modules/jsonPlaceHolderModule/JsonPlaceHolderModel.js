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

    var sendComment = function (json,callback) {
        $http.post("https://jsonplaceholder.typicode.com/comments",json)
            .success(function (data, status) {
                callback(data, true)
            })
            .error(function (data, status) {
                    callback(data, status)
                }
            )
    };

    return {
        getPosts : getPosts,
        sendComment:sendComment
    }
};

jsonPlaceHolderModule.factory("jsonPlaceHolderModel", jsonPlaceHolderModel);

jsonPlaceHolderModel.$inject = ['$http','Constants'];
