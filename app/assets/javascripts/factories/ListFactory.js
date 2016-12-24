
(function() {
    'use strict'

    angular
        .module('todoApp')
        .factory('ListFactory', ['$http', function($http) {
            return {
                getLists: getLists,
                getList: getList

            }

            function getLists() {
                return $http.get('/todo_lists')
                            .then(handleResponse)
                            .catch(handleError)
            }

            function getList(id) {
                return $http.get('/todo_lists/' + id)
                            .then(handleResponse)
                            .catch(handleError)
            }


            function handleResponse(response) {
                console.log(response.data)
                if (response.status === 200) return response.data

            }

            function handleError(error) {
                console.log("There was an error this http request: ", error)
            }
        }])
}())
