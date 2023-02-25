const Student = require("./students");
const Teacher = require("./teachers");


const s1 = new Student();
s1.enroll('John Doe', 16, 'manUaL QA');
s1.showMyDetails();


const t1 = new Teacher;
t1.hire('John Doe', 27, 'Web Development')
t1.showMyDetails();
t1.changeName('Prof. Shawon');
t1.gradeStudent(1, 'A')

s1.showMyDetails();
t1.updateGrade(1, 'C+')
s1.showMyDetails();
