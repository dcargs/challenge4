angular.module('challenge4App', [])
  .controller('StudentController', function(){
    var studentList = this;

    studentList.students = (localStorage.getItem('students') !== null) ? JSON.parse(localStorage.getItem('students')) : [];

    studentList.remaining = function(){
			var count = 0;
			angular.forEach(studentList.students, function(student){
				count += student.active ? 1 : 0;
			});

			return count;
		};

    studentList.addStudent = function(){
			studentList.students.push({ studentNumber: studentList.studentNumber,
                                  studentName: studentList.studentName,
                                  studentAddress: studentList.studentAddress,
                                  studentPhoneNumber: studentList.studentPhoneNumber,
                                  studentGPA: studentList.studentGPA,
                                  studentAcademicPlan: studentList.studentAcademicPlan,
                                  studentLevel: studentList.studentLevel,
                                  active: true
                                  });
			studentList.studentNumber = "";
      studentList.studentName = "";
      studentList.studentAddress = "";
      studentList.studentPhoneNumber = "";
      studentList.studentGPA = "";
      studentList.studentAcademicPlan = "";
      studentList.studentLevel = "";
			localStorage.setItem('students', JSON.stringify(studentList.students));
		};

    studentList.refresh = function(checked){
      var tempStudents = JSON.parse(localStorage.getItem('students'));

      angular.forEach(tempStudents, function(student){
        if(angular.equals(checked.student.studentNumber, student.studentNumber)){
          student.active = !student.active;
          localStorage.setItem('students', JSON.stringify(tempStudents));
        }
      });
    };

    studentList.archive = function(){
			var oldstudents = studentList.students;
			studentList.students = [];
			angular.forEach(oldstudents, function(student){
				if( student.active ) studentList.students.push(student);
			});
			localStorage.setItem('students', JSON.stringify(studentList.students));
		};

  });
