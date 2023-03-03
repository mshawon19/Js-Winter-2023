const Restaurant = require("./restaurant");

const r1 = new Restaurant;
r1.registration('Home Food', 'New York', 100, 10);
r1.addGuest(75);
r1.removeGuest(10);
r1.addEmployee(15);
r1.removeEmployee(5)
r1.showRestaurantDetails();



