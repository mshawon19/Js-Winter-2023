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
    //rStatus: '',

}

    registration (name, cityName, maxGuestCapacity, employees) {
        if (maxGuestCapacity <= 0 || employees <= 0) {
            console.log(`Max Guest Capacity and Employees cannot be less than or equal to Zero`);
        } else {
        this.restaurantInfo.rName = name;
        this.restaurantInfo.rCityName = cityName;
        this.restaurantInfo.rMaxGuestCapacity = maxGuestCapacity;
        this.restaurantInfo.rEmployees = employees;
        Restaurant.restaurantIdCounter++;
        this.restaurantInfo.rUniqueId = Restaurant.restaurantIdCounter;
        Restaurant.allRestaurantInfo.push(this.restaurantInfo.rUniqueId);
       console.log(`Congratulations for successfully registering ${this.restaurantInfo.rName} as a restaurant.`);
       console.log(`Your unique Business ID is ${this.restaurantInfo.rUniqueId}`);
    
        }
    }

    clean() {
        console.log(`The restaurant is cleaned now`);
    }
    addGuest(numOfGuest) {
        if (numOfGuest <= 0) {
            console.log(`Please provide a valid number of guests to be added.`);
        } else if (numOfGuest > this.restaurantInfo.rMaxGuestCapacity) {
            console.log(`The restaurant is at maximum capacity. \n Restaurant cannot add more guests.`);
        }else {
            this.restaurantInfo.rCurrentGuestCount += numOfGuest;
            console.log(`The number of guests added were +${numOfGuest}. The current capacity of the restaurant is ${this.restaurantInfo.rCurrentGuestCount}`);
        }
    }
    removeGuest(numOfGuest) {
        if (numOfGuest <= 0) {
            console.log(`Please provide a valid number of guests to be removed`);
        } else if (numOfGuest > this.restaurantInfo.rCurrentGuestCount) {
            console.log(`Cannot remove more guests than the current guest count.`);
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
        } else {
            this.restaurantInfo.rEmployees += numOfEmployee;
            console.log(`\n\nThe number of employees added were +${numOfEmployee}. The current total of employees at the restaurant is ${this.restaurantInfo.rEmployees}.`);
        }
    }

    removeEmployee(numOfEmployee) {
        if (numOfEmployee <= 0) {
            console.log(`Please provide a valid number of employees to be removed.`);
        } else {
            this.restaurantInfo.rEmployees -= numOfEmployee;
            console.log(`\n\nThe number of guests removed were -${numOfEmployee}. The current total of employees at the restaurant is ${this.restaurantInfo.rEmployees}.`);
        }
    }

    showTotalEmployeeCount() {
        console.log(`The current total number of employees are ${this.restaurantInfo.rEmployees}`);
    }

    showRestaurantDetails() {
        console.log(`\nRestaurant Details`);
        console.log(`Name : ${this.restaurantInfo.rName}`);
        console.log(`Unique-Id : ${this.restaurantInfo.rUniqueId} `);
        console.log(`City Name : ${this.restaurantInfo.rCityName}`);
        console.log(`Maximum Capacity of Restaurant : ${this.restaurantInfo.rMaxGuestCapacity}`);
        console.log(`Current Guest Capacity : ${this.restaurantInfo.rCurrentGuestCount}`);
        console.log(`Number of current employees : ${this.restaurantInfo.rEmployees}`);
    }
}
module.exports = Restaurant;
/*
FOR Registration function
  this.name = name;
        this.cityName = cityName;
        this.maxGuestCapacity = maxGuestCapacity;
        this.employees = employees;
        this.currentGuestCount = 0;
        this.isRestaurantOpen = false;

*/