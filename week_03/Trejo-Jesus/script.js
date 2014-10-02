angular.module('studentApp', [])
	.controller('StudentsController', ['$scope', function($scope) {
		var students = JSON.parse(localStorage.getItem('students')) || [];
		$scope.students = students;

		$scope.addStudent = function() {
			$scope.students.push({
				index: $scope.students.length + 1,
				first_name: $scope.first_name,
				last_name: $scope.last_name,
				twitter_username: $scope.twitter_username,
			});
			$scope.first_name = '';
			$scope.last_name = '';
			$scope.twitter_username = '';
			localStorage.setItem('students', JSON.stringify($scope.students));
		};

		$scope.remove = function(student) {
			var index = $scope.students.indexOf(student);
			$scope.students.splice(index, 1);

			$scope.students.forEach(function(student, i) {
				student.index = i + 1;
			});

			localStorage.setItem('students', JSON.stringify($scope.students));
		};
}]);



