(function () {
    'use strict';
    var app = angular.module('MovieApp');
    app.service('DataService',DataService);
    function DataService(){
        var self = this;

        self.movies = [
            {
                title: 'Captain America: Civil War',
                description: 'helasdfjasdf ajsdhjkasdh asjdkhasdkjhasdasd',
                director: 'oe Russo, Anthony Russo',
                releseYear: 2016,
                rating: 8,
                Language: 'English',
                Country: 'USA',
                characters: [{actor: 'Chris Evans', role: 'Captain America'}, {actor: 'Robert Downey Jr', role: 'Iron Man'}]
            },
            {
                title: 'Captain America: Civil War2',
                description: 'helasdfjasdf ajsdhjkasdh asjdkhasdkjhasdasd',
                director: 'oe Russo, Anthony Russo',
                releseYear: 2015,
                rating: 2,
                Language: 'English',
                Country: 'USA',
                characters: [{actor: 'Chris Evans', role: 'Captain America'}, {actor: 'Robert Downey Jr', role: 'Iron Man'}]
            }
        ];
        self.getMovies= function () {
            return self.movies;
        }
        self.addNewMovie = function (movie) {
            self.movies.push(movie);
        }

    }
})();