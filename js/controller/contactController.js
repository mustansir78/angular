var app = angular.module('myApp', []);

app.controller('ContactController', function($scope, $http) {

	$http.get("api/contact.php").
		then(function(response) {
			$scope.contacts = response.data.records;
		});

	$scope.editContact = function(userid) {
		alert('clicked');
		$http.get("api/contact_edit.php?userid=" + userid).
			then(function(response) {
				$scope.contact = response.data.record;
			},
			function(response) {
				$scope.message = "Error occured" + response.statusMessage;
			}
			);
	}

});

/*app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.htm"
  })
  .when("/edit", {
    templateUrl : "edit.htm",
    controller : "editContactController"
  })
  .when("/delete", {
    templateUrl : "delete.htm",
    controller : "deleteContactController"
  })
  .when("/create", {
    templateUrl : "create.htm",
    controller : "createContactController"
  });
});*/

/*app.controller("editContactController", function($scope, $http, id) {
	$http.get("api/contact_edit.php?userid=" + id).then(
		function(response) {
			$scope.contact = response.data.records;
		},
		function() {
			$scope.message = "Error while fetching user details";
		}
		);
});*/