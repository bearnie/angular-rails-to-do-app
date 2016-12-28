
(function() {
    'use strict'

    angular
        .module('todoApp')
        .factory('ListFactory', ['$http', function($http) {
            return {
                getLists: getLists,
                createList: createList,
                editList: editList,
                deleteList: deleteList
            }

            function getLists() {
                return $http.get('/todo_lists')
                            .then(handleResponse)
                            .catch(handleError)
            }

            function createList(list) {
              return $http.post('/todo_lists/', list)
                          .then(handleResponse)
                          .catch(handleError)
            }

            function editList(listId, list) {
              return $http.put('/todo_lists/' + listId, list)
                          .then(handleResponse)
                          .catch(handleError)
            }

            function deleteList(listId) {
              return $http.delete('/todo_lists/' + listId)
                          .then(handleResponse)
                          .catch(handleError)
            }


            function handleResponse(response) {
                if (response.status === 200) return response.data

            }

            function handleError(error) {
                console.log("There was an error this http request: ", error)
            }
        }])
}())
