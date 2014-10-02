//console.log(angular);
angular.module('studentApp', []).controller('StudentController', ['$scope', function($scope) {
	$scope.students = [
		{index: 1, first_name: 'Calvin', last_name: 'Tennant', Twitter_Username: 'c11t_'},
		{index: 2, first_name: 'Jason', last_name: 'McPherson', Twitter_Username: 'jM88'},
	];
	$scope.addStudent = function(){
		console.log($scope.first_name, $scope.last_name, $scope.Twitter_Username);
		$scope.students.push({
			index: $scope.students.length + 1,
			first_name: $scope.first_name, 
			last_name: $scope.last_name, 
			Twitter_Username: $scope.Twitter_Username
		});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.Twitter_Username = '';
	}
	
	console.log($scope);
}]);