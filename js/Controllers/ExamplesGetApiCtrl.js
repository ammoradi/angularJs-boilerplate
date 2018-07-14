var Examples_getApiCtrl = function ($scope , jsonPlaceHolderModel) {

    $scope.json = {};
    $scope.postJson = {};
    jsonPlaceHolderModel.getPosts(function (data , status) {
        if(status){
            $scope.json = data ;
            console.log($scope.json)
        }
    });

    $scope.sendComment = function () {
        jsonPlaceHolderModel.sendComment($scope.postJson , function (data , status) {
            if(status){
                console.log(data)
            }
            else{
                console.log(status)
            }
        });
    }

};

angularJs.controller("Examples_getApiCtrl", Examples_getApiCtrl);

Examples_getApiCtrl.$inject = ['$scope' , 'jsonPlaceHolderModel'];
