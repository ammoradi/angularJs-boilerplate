var Examples_getApiCtrl = function ($scope , jsonPlaceHolderModel) {

    $scope.json = {};
    jsonPlaceHolderModel.getPosts(function (data , status) {
        if(status){
            $scope.json = data ;
            console.log($scope.json)
        }
    })

};

angularJs.controller("Examples_getApiCtrl", Examples_getApiCtrl);

Examples_getApiCtrl.$inject = ['$scope' , 'jsonPlaceHolderModel'];
