'use strict';
var MovieApp = angular.module('MovieApp', ['ui.router']);
MovieApp.controller('MainController', MainController);
MovieApp.controller('MovieDetails', MovieDetails);
MovieApp.directive('myFooter', MyFooter);
MovieApp.$inject = ['DataService'];
function MainController($scope, DataService, $state) {
    $scope.movies = DataService.getMovies();
    $scope.selectedOrder = '-releseYear';
    $scope.orderByOptions = ['title', 'releseYear', 'rating'];
    $scope.loopTo = function (num) {
        var result = [];
        for (var i = 0; i < num; i++)
            result.push(i);
        return result;
    }

    $scope.textOutput = "hello world";
    $scope.testMe = function (textInput) {
        $scope.textOutput = textInput;
    }
    $scope.form = {};
    $scope.NewCharacters = [{actor: '', role: ''}];
    $scope.submitNewMovie = function () {
        DataService.addNewMovie({
            title: $scope.form.title,
            description: $scope.form.description,
            director: $scope.form.director,
            releseYear: $scope.form.releseYear,
            rating: $scope.form.rating,
            Language: $scope.form.Language,
            Country: $scope.form.Country,
            characters: $scope.NewCharacters
        });
        $scope.NewCharacters = [{actor: '', role: ''}];
        $scope.form = {};
        $state.go('home');
    };

    $scope.addInputItem = function () {
        $scope.NewCharacters.push({actor: '', role: ''});
    };
}

function MovieDetails($scope, $state, $stateParams) {
    $scope.movie_details = $scope.movies[$stateParams.id];

}
function MyFooter() {
    return {
        templateUrl: 'views/my_footer.html'
    };

}

MovieApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/movie_list.html'
            })
            .state('movie_detail', {
                url: '^/movie_detail/:id',
                templateUrl: 'views/movie_details.html',
                controller: 'MovieDetails'

            })
            .state('new_movie', {
                url: '/new_movie',
                templateUrl: 'views/add_new_movie.html'
            });
});


