console.log("Tofik")
console.clear
function No_Sir(value){
    return 'Hello Sir';
}
function Yes_Sir(func){
    alert(func());
}

// const Names = [
//     'Tofik',
//     'Maniyar',
//   ];
//   console.log(Names.map(Names => Names.length)); 

//   const getInitials = (firstName, lastName) => {
//     firstName + lastName;
//   }
//   console.log(getInitials("Tofik", "Maniyar")); 


 // Q2. An arrow function takes two arguments firstName and lastName 
 // and returns a 2 letter string that represents the first letter of 
 // both the arguments. For the arguments Roger and Waters, the function 
 // returns ‘RW’. Write this function.

    const firstLetterOfBothArg = (firstName, lastName)=>{
    let output = "" + firstName.charAt(0) + lastName.charAt(0);
    return output;
    }  
    console.log(firstLetterOfBothArg("Tofik", "Maniyar"));


 // Q1. Write a program to demonstrate how a function can be 
 // passed as a parameter to another function.

     function first(y,z) {
      console.log('This is first function',y,z);
        }
            function second() {
                console.log('This is second function');
            }
            first(20, 30, second());