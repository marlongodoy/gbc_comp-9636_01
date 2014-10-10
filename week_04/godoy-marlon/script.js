angular.module('studentApp', []).controller('StudentsController', ['$scope', function($scope) {
	$scope.students = JSON.parse(localStorage.getItem('students')) || [{
		first_name: 'Calvin',
		last_name: 'Tennant',
		age: 'c11t_',
		number: 1,
	}];
	$scope.addStudent = function() {
		console.log($scope.first_name);
		$scope.students.push({
			number: $scope.students.length + 1,
			first_name: $scope.first_name,
			last_name: $scope.last_name,
			age: $scope.age,
		});
		$scope.first_name = '';
		$scope.last_name = '';
		$scope.age = '';

		localStorage.setItem('students', JSON.stringify($scope.students));
	}
	$scope.removeStudent = function(student) {
		var arrayIndex = $scope.students.indexOf(student);
		$scope.students.splice(arrayIndex, 1);

		$scope.students.forEach(function(student, i) {
			student.number = i + 1;
			console.log(student, i);
		});

		localStorage.setItem('students', JSON.stringify($scope.students));

	};
}]);
