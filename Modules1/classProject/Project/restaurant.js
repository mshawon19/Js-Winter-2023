//Md Shawon's 

class Restaurant {

static restaurantIdCounter = 0;
static allRestaurantInfo = [];

restaurantInfo = {
    rName: 'Default Name',
    rUniqueId: 0,
    rCityName: 'Default City Name',
    rMaxGuestCapacity: 0,
    rCurrentGuestCount: 0,
    rEmployees: 0,
    rStatus: 'closed',

}

    constructor (name, cityName, maxGuestCapacity, employees) {
        if (maxGuestCapacity <= 0 || employees <= 0) {
            console.log(`Max Guest Capacity and Employees cannot be less than or equal to Zero`);
            throw 'Invalid Max Guest Capacity and Employees'
        } else {
        this.restaurantInfo.rName = name;
        this.restaurantInfo.rCityName = cityName;
        this.restaurantInfo.rMaxGuestCapacity = maxGuestCapacity;
        this.restaurantInfo.rEmployees = employees;
        this.restaurantInfo.rStatus = 'closed'
        Restaurant.restaurantIdCounter++;
        this.restaurantInfo.rUniqueId = Restaurant.restaurantIdCounter;
        Restaurant.allRestaurantInfo.push(this.restaurantInfo.rUniqueId);
       console.log(`Congratulations for successfully registering ${this.restaurantInfo.rName} as a restaurant.`);
       console.log(`Your unique Business ID is ${this.restaurantInfo.rUniqueId}`);
    
        }
    }
    open() {
        if (this.restaurantInfo.rStatus === "open") {
          console.log("Restaurant is already open");
        } else {
          this.restaurantInfo.rStatus = "Open";
          console.log("the Restaurant is now open");
        }
      }
    
    close() {
    if (this.restaurantInfo.rStatus === "closed") {
      console.log("The restaurant is already closed");
    } else {
      this.restaurantInfo.rStatus = "closed";
      console.log("The Restaurant is now Closed");
    }
  }

    clean() {
        console.log(`The restaurant is now cleaned`);
    }
    addGuest(numOfGuest) {
        if (numOfGuest <= 0) {
            console.log(`Please provide a valid number of guests to be added.`);
            return;
        } else if (numOfGuest > this.restaurantInfo.rMaxGuestCapacity) {
            console.log(`The restaurant is at maximum capacity. \n Restaurant cannot add more guests.`);
            return;
        }else {
            this.restaurantInfo.rCurrentGuestCount += numOfGuest;
            console.log(`The number of guests added were +${numOfGuest}. The current capacity of the restaurant is ${this.restaurantInfo.rCurrentGuestCount}`);
        }
    }
    removeGuest(numOfGuest) {
        if (numOfGuest <= 0) {
            console.log(`Please provide a valid number of guests to be removed`);
            return;
        } else if (numOfGuest > this.restaurantInfo.rCurrentGuestCount) {
            console.log(`Cannot remove more guests than the current guest count.`);
            return;
        } else {
            this.restaurantInfo.rCurrentGuestCount -= numOfGuest;
            console.log(`\n\nThe number of guests removed were -${numOfGuest}. The current capacity of the restaurant is ${this.restaurantInfo.rCurrentGuestCount}.`);
        }
    }

    showCurrentGuestCount(){
        console.log(`\nThe current guest count is ${this.restaurantInfo.rCurrentGuestCount}.`);
    }
    
    
    addEmployee(numOfEmployee) {
        if (numOfEmployee <= 0) {
            console.log(`Please provide a valid number of employees to be added.`);
            return;
        } else {
            this.restaurantInfo.rEmployees += numOfEmployee;
            console.log(`\n\nThe number of employees added were +${numOfEmployee}. The current total of employees at the restaurant is ${this.restaurantInfo.rEmployees}.`);
        }
    }

    removeEmployee(numOfEmployee) {
        if (numOfEmployee <= 0) {
            console.log(`Please provide a valid number of employees to be removed.`);
            return;
        } else if (numOfEmployee > this.restaurantInfo.rEmployees) {
            console.log(`Cannot remove more employees than the current employee count.`);
            return;
        } else {
            this.restaurantInfo.rEmployees -= numOfEmployee;
            console.log(`\n\nThe number of guests removed were -${numOfEmployee}. The current total of employees at the restaurant is ${this.restaurantInfo.rEmployees}.`);
        }
    }

    showTotalEmployeeCount() {
        console.log(`\nThe current total number of employees are ${this.restaurantInfo.rEmployees}`);
    }

    showRestaurantDetails() {
        console.log(`\nRestaurant Details`);
        console.log(`Name : ${this.restaurantInfo.rName}`);
        console.log(`Unique-Id : ${this.restaurantInfo.rUniqueId} `);
        console.log(`City Name : ${this.restaurantInfo.rCityName}`);
        console.log(`Maximum Capacity of Restaurant : ${this.restaurantInfo.rMaxGuestCapacity}`);
        console.log(`Current Guest Capacity : ${this.restaurantInfo.rCurrentGuestCount}`);
        console.log(`Number of current employees : ${this.restaurantInfo.rEmployees}`);
        console.log(`Restaurant status is : ${this.restaurantInfo.rStatus}`);
    }
}
module.exports = Restaurant;