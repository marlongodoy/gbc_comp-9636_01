angular.module('studentApp', []).controller('StudentsController', ['$scope', function($scope) {
	$scope.students = [
		{index: 1, first_name: 'Calvin', last_name: 'Tennant', twitter_username: 'c11t_'},
		{index: 2, first_name: 'Jason', last_name: 'McPherson'},
	];
	$scope.addStudent = function() {
		console.log($scope.first_name);
		$scope.students.push({
			index: $scope.students.length + 1,
			first_name: $scope.first_name,
			last_name: $scope.last_name,
			twitter_username: $scope.twitter_username,
		});
		$scope.first_name = '';
		$scope.last_name = '';
		$scope.twitter_username = '';
	}
	
	console.log($scope);
}]);
