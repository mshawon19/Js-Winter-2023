const House = require("./house");
const Restaurant = require("./restaurant");

let r1;
let h1;
try {
    h1= new House('Shawon Home', 'New York', 15)
    h1.showHouseDetails();
    h1.addMember(15);
    h1.unlock();
    h1.lock();
    h1.clean();
    h1.removeMember(10);
    h1.showCurrentMemberCount();
    h1.showHouseDetails();



console.log(`\n\nRestaurant1\n`);

    r1=new Restaurant('Home Food', 'New York', 100, 10);
    r1.showRestaurantDetails();
    r1.open('Open');
    r1.addGuest(75);
   // r1.showRestaurantDetails();
    r1.showCurrentGuestCount();
    r1.addEmployee(25);
   //r1.showTotalEmployeeCount;
   r1.clean();
   // r1.close('close');
    //r1.showRestaurantDetails();
    r1.showRestaurantDetails();

   // r1.showRestaurantDetails();

 
} catch (e) {
    console.log("Process cannot be completed at this try due to above reason.");
}


