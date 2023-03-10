class House {
  
    static houseIdCounter = 0;
    static allHouseInfo = [];
    
    houseInfo = {
        hName: 'Default Name',
        hUniqueId: 0,
        hCityName: 'Default City Name',
        hMaxMemberCapacity: 0,
        hCurrentMemberCount: 0,
        hStatus: 'locked',
    }

    constructor (name, cityName, maxMemberCapacity) {
        if (maxMemberCapacity <= 0 ) {
            console.log(`Max member Capacity cannot be less than or equal to Zero`);
            throw 'Invalid Max member Capacity'
        } else {
        this.houseInfo.hName = name;
        this.houseInfo.hCityName = cityName;
        this.houseInfo.hMaxMemberCapacity = maxMemberCapacity;
        this.houseInfo.hStatus = 'locked'
        House.houseIdCounter++;
        this.houseInfo.hUniqueId = House.houseIdCounter;
        House.allHouseInfo.push(this.houseInfo.hUniqueId);
       console.log(`Congratulations for successfully registering ${this.houseInfo.hName} as a house.`);
       console.log(`Your unique Home ID is ${this.houseInfo.hUniqueId}`);
        }
    }

    unlock() {
        if (this.houseInfo.hStatus === "unlock") {
          console.log("The House is already unlocked");
        } else {
          this.houseInfo.hStatus = "unlock";
          console.log("The House is now Unlocked");
        }
    }

    lock() {
        if (this.houseInfo.hStatus === "lock") {
          console.log("The House is already Locked");
        } else {
          this.houseInfo.hStatus = "lock";
          console.log("The House is now Locked");
        }
      }

    clean() {
        console.log(`The House is now cleaned`);
      }
    
    addMember(numOfMember) {
        if (numOfMember <= 0) {
            console.log(`Please provide a valid number of members to be added.`);
            return;
        } else if (numOfMember > this.houseInfo.hMaxMemberCapacity) {
            console.log(`The House is at maximum capacity. \n House cannot add more members.`);
            return;
        }else {
            this.houseInfo.hCurrentMemberCount += numOfMember;
            console.log(`The number of members added were +${numOfMember}. The current capacity of the house is ${this.houseInfo.hCurrentMemberCount}`);
        }
    }

    removeMember(numOfMember) {
        if (numOfMember <= 0) {
            console.log(`Please provide a valid number of members to be removed.`);
            return;
        } else if (numOfMember > this.houseInfo.hCurrentMemberCount) {
            console.log(`Cannot remove more members than the current member count`);
            return;
        }else {
            this.houseInfo.hCurrentMemberCount -= numOfMember;
            console.log(`The number of members removed were -${numOfMember}. The current capacity of the house is ${this.houseInfo.hCurrentMemberCount}.`);
        }
    }

    showCurrentMemberCount(){
        console.log(`\nThe current member count is ${this.houseInfo.hCurrentMemberCount}.`);
    }

    showHouseDetails() {
         console.log(`\nHouse Details`);
        console.log(`Name : ${this.houseInfo.hName}`);
        console.log(`Unique-Id : ${this.houseInfo.hUniqueId} `);
        console.log(`City Name : ${this.houseInfo.hCityName}`);
        console.log(`Maximum Capacity of House : ${this.houseInfo.hMaxMemberCapacity}`);
        console.log(`Current Member Capacity : ${this.houseInfo.hCurrentMemberCount}`);
        console.log(`House status is : ${this.houseInfo.hStatus}`);
    }
        
}
module.exports = House;