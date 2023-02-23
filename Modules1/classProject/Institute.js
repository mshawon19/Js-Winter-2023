const Student = require("./students");


const s1 = new Student();
s1.enroll('John Doe', 16, 'manUaL QA');
s1.changeName('Shawon ')

const s2 = new Student();
s2.enroll('Md Shawon', 23, 'manual QA')
s2.changeName('Md Fahad Shawon');
s2.changeCourse('SDET Course');
s2.MakePayment(250);