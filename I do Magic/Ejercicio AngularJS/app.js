/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: app.js
 */

angular.module("twitterUsersApp", ['ngRoute'])
.config( function($routeProvider) {
	$routeProvider
	.when('/',{
		controller: 'usersController',
		templateUrl: 'app/views/viewUsers.html'
	});
})
.controller('usersController', function($scope, $http) {
	
	$scope.allLetters = [];
	$scope.auxLetters = [];
	$scope.auxUsers = [];

	/** A request is performed to get the Json information */
	$http.get("http://intelligentsense.com/trainings/twitterUser.json")
		.success(function(data){
			$scope.users = data.users;
			$scope.auxUsers = $scope.users;
			$scope.allLetters = getLettersArray($scope.users);
			$scope.auxLetters = $scope.allLetters;
		})
		.error(function() {
			alert("Error cargando Json");
	});

	/** Filters the users based on the letter of the button pressed */
	$scope.filterUsers = function(pUserLetter) {
		$scope.auxUsers = [];
		if(pUserLetter === "ALL"){
			$scope.auxUsers = $scope.users;

		}else {
			$scope.users.filter(function(pUser) {
				var userFirstLetter = pUser.Name.charAt(0);

				if (userFirstLetter === pUserLetter){
					$scope.auxUsers.push(pUser);
				}
				
			});
		}
	}

});

/** Add an element at the beginning of the array */
function addElement(pArray, pElement){
	return [pElement].concat(pArray);
}

/** Eliminates the duplicated elements of the array */
function eliminateDuplicates(pArray) {
    var auxLetters = [];
	var lettersJson = {};

	for (var letterPosition = 0; letterPosition < pArray.length; letterPosition++) {
	   lettersJson[pArray[letterPosition]] = 0;
	}

	for (letter in lettersJson) {
	   auxLetters.push(letter);
	}

	return auxLetters;
}

/** Returns an array with the first letter of the users' name */
function getFirstLettersArray(pUsersArray){
	var auxLettersArray = [];
	pUsersArray.filter(function(user) {
		auxLettersArray.push(user.Name.charAt(0));
	});		

	return auxLettersArray;	
}

/** Returns the array of all the letters */
function getLettersArray(pUsers) {
	var allLetters = [];

	allLetters = getFirstLettersArray(pUsers);
	sortArray(allLetters);
	allLetters = addElement(allLetters, "ALL");
	allLetters = eliminateDuplicates(allLetters);

	return allLetters;
}

/** Sorts the array sended as parameter */
function sortArray(pArray){
	return pArray.sort();
}
