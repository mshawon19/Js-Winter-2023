//Shawon's Homework 9
const Student = require("./students");

class Teacher {

    // // static-variable
    static courseData = [
        { 
            cName: 'Web Development',
            cSalary: 15000
        },
        { 
            cName: 'SDET Course',
            cSalary: 14000
        },
        { 
            cName: 'Backend Development',
            cSalary: 13000
        },
        { 
            cName: 'FrontEnd Development',
            cSalary: 12000
        },
        { 
            cName: 'Manual QA',
            cSalary: 10000
        }
    ]


      // static-variable
      static teacherIdCounter = 0;
    
      teacherInfo = {
          tId: 0,
          tName: 'Default Name',
          tAge: 0,
          tCourseName: 'Default Course name',
          tSalary: 0,
      }

  /**
    * 1. what is the purpose of the function?
    *      enroll
    * 2. Do I need any input from user? - Yes
    *      If yes,
    *          a) how manay inputs we need from user? name, age, courseName
    * 
    * 3. Should the function return any value back to user? - No
    * 
    */     

      hire (name, age, courseName) {
        if ( age < 21) {
        console.log(` We only hire who is 21 or above`);
        } else if (!this.isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
      } else { 
        this.teacherInfo.tName = name;
            this.teacherInfo.tAge = age;
            const courseObject = this.isCourseValid(courseName);
            this.teacherInfo.tCourseName = courseObject.cName;
            this.teacherInfo.tSalary = courseObject.cSalary;
            Teacher.teacherIdCounter++;
            this.teacherInfo.tId = Teacher.teacherIdCounter;
            console.log(`\nCongratulations for enrolling in '${courseObject.cName}' course`);
            console.log(`Your student id: ${this.teacherInfo.tId}`);
        }
}

showMyDetails() {
    console.log(`\nTeacher Info:`);
    console.log(`Id : ${this.teacherInfo.tId}`);
    console.log(`Name : ${this.teacherInfo.tName}`);
    console.log(`Course name : ${this.teacherInfo.tCourseName}`);
    console.log(`salary : $${this.teacherInfo.tSalary}`);
}

/*
changeName (use if a teacher would like to change the name in the system)
 *          if new-name provided by teacher is exactly saved in the system (teacherInfo.tName)
 *              print msg: Name cannot be updated; as you have same name already stored in the system.
 *          otherwise
 *              store new-name in teacherInfo.tName
 *              print msg: Your name in the system is updated to new-name
*/
changeName(newTeacherName) {
    if (newTeacherName.toLowerCase().localeCompare(this.teacherInfo.tName.toLowerCase())===0) {
        console.log(`Name cannot be updated; as you have same name already stored in the system.`);
    } else {
        this.teacherInfo.tName = newTeacherName;
        console.log(`Your name in the system is updated to ${this.teacherInfo.tName}`);
    } 
}

/*
gradeStudent (use if a teacher would like to provide grade to a student)
 *          teacher should provide the student-id and student-grade
 *          if given student-id does not exist
 *              print msg: Incorrect student-id provided
 *          otherwise if student-id is correct AND student is already graded
 *              print msg: Student is already graded; to update student-grade pls use updateGrade-method
 *          otherwise
 *              update grade of the respective student
 *              print msg: Thank you for grading student with id = student-id
*/
    gradeStudent(studentId, studentGrade) {
        const studentInfoObject = Student.findStudentId(studentId)
        if (!studentInfoObject){
            console.log(`Incorrect student-id "${studentId}" provided`);
        }else if (studentInfoObject.sGrade.localeCompare('-') !== 0) {
            console.log(`Student with ID "${studentId}" is already graded; to update student-grade pls use updateGrade-method`);
        } else {
            studentInfoObject.sGrade = studentGrade;
            console.log(`Thank you for grading student with id "${studentId}"`);
        }
    }

/*
updateGrade (use if a teacher would like to update grade of a student)
 *          teacher should provide the student-id and new-student-grade
 *          if given student-id does not exist
 *              print msg: Incorrect student-id provided
 *          otherwise if student-id is correct AND student is NOT graded
 *              print msg: Student is not graded; to provide student-grade pls use gradeStudent-method
 *          otherwise if student-id is correct AND student is same as the new-student-grade
 *              print msg: Student has the same grade
 *          otherwise
 *              update grade of the respective student
 *              print msg: Thank you for updating grade of student with id = student-id
*/


      isCourseValid(courseName) {
    return Teacher.courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
}

    updateGrade(studentId, newGrade) {
        const studentInfoObject = Student.findStudentId(studentId)
        if (!studentInfoObject){
            console.log(`Incorrect student-id "${studentId}" provided`);
       } else if (studentInfoObject.sGrade.localeCompare('-') === 0) {
        console.log(`Student is not graded; to provide student-grade pls use gradeStudent-method`);
       } else if (studentInfoObject.sGrade.localeCompare(newGrade) === 0) {
        console.log(`Student already has the same grade`)
       }else {
        studentInfoObject.sGrade = newGrade;
            console.log(`Thank you for updating grade of student with id "${studentId}"`);
       }
    }
}

module.exports = Teacher;