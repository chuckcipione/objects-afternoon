// Create an object called user that has name, age, password properties and assign them appropriate values.

user = {
    name: 'Chuck',
    age: 26,
    password: 'passw0rd'
};


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

user.email = "chuckcipione@yahoo.com";
user.username = "chuckcip";

alert (JSON.stringify(user));


// Now loop over your user object and alert each of the keys.
for (var key in user){
    alert (JSON.stringify(key));
}



// Now loop over your user object and alert each of the values for each key.
for (var key in user){
    alert (JSON.stringify(user));
}



// Remove the username from your user object
delete user.username;



// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

creditCard = {
    number: 123456,
    cvc: 123,
    type: 'MasterCard',
    limitproperties: 'none'
}


// Create a variable called alternating. Set it equal to the string bonusCategories.

var alternating = "bonusCategories";


/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */
creditCard['bonusCategories'] = 'key', '%'
creditCard['bank'] = "bank name", "bank address"; 



// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

Object.assign(user, creditCard);

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

function games(){
    for (var i = 0; i < allies.length; i++){
        allies.splice(3, 1, 'Dragon Lady');
    } 
}
  
