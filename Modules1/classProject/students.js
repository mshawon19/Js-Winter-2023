/**
 * Student Properties: (Global variables)
 *      id
 *      name
 *      age
 *      courseName
 *      balance
 * 
 * Student Actions: (Functions)
 *      enroll
 *      showMyDetails
 */


class Student {

    // // static-variable
    static courseData = [
        { 
            cName: 'Web Development',
            cPrice: 5000
        },
        { 
            cName: 'SDET Course',
            cPrice: 4000
        },
        { 
            cName: 'Backend Development',
            cPrice: 3000
        },
        { 
            cName: 'FrontEnd Development',
            cPrice: 2000
        },
        { 
            cName: 'Manual QA',
            cPrice: 1000
        }
    ]
    
    // static-variable
    static studentIdCounter = 0;
    
    studentInfo = {
        sId: 0,
        sName: 'Default Name',
        sAge: 0,
        sCourseName: 'Default Course name',
        sBalance: 0,
        sGrade: '-'
    }
    
    /**
    * 1. what is the purpose of the function?
    *      enroll
    * 2. Do I need any input from user? - Yes
    *      If yes,
    *          a) how many inputs we need from user? name, age, courseName
    * 
    * 3. Should the function return any value back to user? - No
    * 
    */
    enroll(name, age, courseName) {
        if (age < 16) {
            console.log('\nSorry: We only enroll who are 16 or above');
        } else if (!this.isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
        } 
        /*else {
            this.studentInfo.sName = name;
            this.studentInfo.sAge = age;
            const courseObject = this.isCourseValid(courseName);
            this.studentInfo.sCourseName = courseObject.cName;
            this.studentInfo.sBalance = courseObject.cPrice;
            Student.studentIdCounter++;
            this.studentInfo.sId = Student.studentIdCounter;
            console.log(`\nCongratulations for enrolling in '${courseObject.cName}' course`);
            console.log(`Your student id: ${this.studentInfo.sId}`);
       }
       */
    }


    showMyDetails() {
        console.log(`\nStudent Info:`);
        console.log(`Id : ${this.studentInfo.sId}`);
        console.log(`Name : ${this.studentInfo.sName}`);
        console.log(`Course name : ${this.studentInfo.sCourseName}`);
        console.log(`Balance : ${this.studentInfo.sBalance}`);
        console.log(`Last grade received : ${this.studentInfo.sGrade}`);
    }
/*
    changeName (use if a student would like to change the name in the system)
    *          if new-name provided by student is exactly saved in the system (studentInfo.sName)
    *              print msg: Name cannot be updated; as you have same name already stored in the system.
    *          otherwise
    *              store new-name in studentInfo.sName
    *              print msg: Your name in the system is updated to new-name
    */
    changeName(newStudentName) {
        if (newStudentName.toLowerCase().localeCompare(this.studentInfo.sName.toLowerCase())===0) {
            console.log(`Name cannot be updated; as you have same name already stored in the system.`);
        } else {
            this.studentInfo.sName = newStudentName;
            console.log(`Your name in the system is updated to ${this.studentInfo.sName}`);
        } 
    }

/*changeCourse (use if a student would like to change the course)
    *          if new-course-name is NOT valid (or not available in the institute)
    *              print msg: Institute does not provide any course on new-course-name
    *          if student is already enrolled in the course
    *              print msg: You are already enrolled in the course
    *          otherwise
    *              store new-course-name in studentInfo.sCourseName
    *              store new-course-amount in studentInfo.sBalance
    *              print msg: Your course in the system is updated to new-course-name
    *              print msg: Your updated balance is new-course-amount
    */
    changeCourse(newCourse) {
     if (!this.isCourseValid(newCourse)) {
        console.log(`\nInstitute does not provide any course on ${newCourse}`);
    } else if (this.studentInfo.sCourseName.toLowerCase().localeCompare(newCourse.toLowerCase()) === 0) {
       console.log(`You are already enrolled in ${this.studentInfo.sCourseName}`);
    } else{
        const courseObject = this.isCourseValid(newCourse);
        this.studentInfo.sCourseName = courseObject.cName;
        this.studentInfo.sBalance = courseObject.cPrice;
        console.log(`Your course in the system is updated to ${this.studentInfo.sCourseName}`);
        console.log(`Your updated balance is ${this.studentInfo.sBalance}`);
    }
   }

   MakePayment(amount){
    if (amount <= 0) {
        console.log(`\nPls provide a valid amount for payment`);
    } else if (amount > this.studentInfo.sBalance) {
        console.log(`\nYou cannot pay more than the balance amount of $${this.studentInfo.sBalance}`);
    } else {
        this.studentInfo.sBalance -= amount;
        console.log(`\nThank you for the payment. Your updated balance is $${this.studentInfo.sBalance}`);
    }
   }
   
    isCourseValid(courseName) {
        return Student.courseData.find(cObject => cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0)
    }
    // static-function
    static msgFromClass2023(msg) {
        console.log(`\n\nMsg from Class 2023:\n${msg}`);
    }

}
module.exports = Student;