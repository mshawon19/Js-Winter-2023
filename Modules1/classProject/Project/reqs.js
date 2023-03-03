/**
 * Create a software for Real Estate company
 * 
 * Lead: Mar-1 2023
 * Due date: Mar-10 2023
 * 
 * Restaurant
 *      registration()  -> this is one-time process
 *          user should provide (name, cityName, maxGuestCapacity, employees)
 *          1. maxGuestCapacity cannot be less than zero
 *          2. employees cannot be less than zero
 *          On successful registration, the restaurant now is given an unique-id
 *          only then, register is allowed to function.
 *          should be in Constructor
 *          
 *           In case restaurant maxGuestCapacity is not valid, show error :
 *              Max Guest Capacity cannot be less than or equal to zero.
 *          
 *           In case restaurant empolyee is not valid, show error :
 *              Employee cannot be less than or equal to zero.
 *              
 *              Idea for code:
 *            -> create a restaurantInfo object to store rname, rUniqueId, rCityName, rMaxGuestCapacity, rCurrentGuestCount, and rEmployees
 *                  this will store the restaurant info added
 *            -> Might have to create a static restaurant Id counter outside the registration function.
 *              
 *       open()
 *          user should open restaurant 
 *          user should not be able to open restaurant if already open
 *    
 *       close()
 *          user should close restaurant 
 *          user should not be able to close restaurant if already closed
 *     
 *       clean()
 *          user should be able to clean the restaurant using clean-function
 *          Hint: just add a console.log('The restaurant is cleaned now');
 *     
 *       addGuest()
 *          User shoulder provide (numOfGUest)
 *          1. numOfGuest to be added cannot be less than or equal to zero.
 *              In case numOfGuest is less than or equal to zero, show error like:
 *              Pease provide a valid number of guests to be added.
 *          2. numOfGuest to be added cannot be greater than the rMaxGuestCapacity.
 *              In case numOfGuest is greater than the rMaxGuestCapacity, show eror like:
 *              The restaurant is at maximum capaity. Restaurant cannot add more guests.
 *         
 *             Idea for code: (Could use +=numOfGuest on rCurrentGuestCount)
 *           On successful addition of guests, show message:
 *             The number of guests added were numOfGuest.
 *              The current capacity of the restaurant is (xyz)
 *      removeGuest()
 *            User shoulder provide (numOfGUest)
 *          1. numOfGuest to be removed cannot be less than or equal to zero.
 *              In case numOfGuest is less than or equal to zero, show error like:
 *              Pease provide a valid number of guests to be removed.
 *          2. numOfGuest to be removed cannot be greater than the rCurrentGuestCount.
 *              In case numOfGuest is greater than the rMaxGuestCapacity, show eror like:
 *              Cannot remove more guests than the current guest count.
 *         
 *             Idea for code: (Could use -=numOfGuest on rCurrentGuestCount)
 *           On successful addition of guests, show message:
 *             The number of guests removed were numOfGuest.
 *              The current capacity of the restaurant is (xyz)
 *     
 *       showCurrentGuestCount() 
 *          -   to show the number of guests/customer sitting in the restaurant at the moment
 *              Idea for code: use the restaurantInfo object previously created to show the current number of guests.
 *    
 *        addEmployee()
 *          User shoulder provide (numOEmployee)
 *          1. numOfEmployee to be added cannot be less than or equal to zero.
 *              In case numOfEmployee is less than or equal to zero, show error like:
 *              Pease provide a valid number of employees to be added.
 *         
 *             Idea for code: (Could use +=numOfEmployee on rEmployees)
 *           On successful addition of employees, show message:
 *             The number of guests added were numOfEmployee.
 *              The current total of employees at the restaurant is rEmployees.
 *      removeEmployee()
 *            User shoulder provide (numOEmployee)
 *          1. numOfEmployee to be removed cannot be less than or equal to zero.
 *              In case numOfEmployee is less than or equal to zero, show error like:
 *              Pease provide a valid number of employees to be removed.
 *         
 *             Idea for code: (Could use +=numOfEmployee on rEmployees)
 *           On successful addition of employees, show message:
 *             The number of guests removed were numOfEmployee.
 *              The current total of employees at the restaurant is rEmployees.
 *      
 *          showTotalEmployees()    
 *          -   to show the number of employee hired by the restaurant
 *          Idea for code: use the restaurantInfo object previously created to show the current number of employees.
 *    
 *      showRestaurantDetails()
 *              Name:
 *              Restaurant id:
 *              City:
 *              Current status: open/close
 *              Total guests sitting as of now:
 *              Guests capacity: 
 *              Total employees: 
 *  
 *          Idea for code: use the restaurantInfo object previously created to show each of the
 *          restaurant details.
 * House
 *      registration()  -> this is one-time process
 *          user should provide (name, cityName, totalMembers)
 *          On successful registration, the house now is given an unique-id
 *          only then, house is allowed to use.
 *          should be in Constructor
 *      unlock()
 *          user should be able to unlock the house
 *          user should not be able to unlock house if already unlocked
 *      lock()
 *          user should be able to lock the house
 *          user should not be able to lock house if already locked
 *      clean()
 *          user should be able to clean the house using clean-function
 *          Hint: just add a console.log('The house is cleaned now');
 *     
 *  addMembers()
 *      removeMembers()
 *      showTotalMembers()  -   to show the number of people living in the house
 *      showHouseDetails()
 *          House-id:
 *          City:
 *          Current status: lock/unlock
 *          Total members: 
 * 
 * 
 */