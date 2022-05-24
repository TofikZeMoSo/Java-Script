function getData(uId) {
    return new Promise(resolve => setTimeout(() => {
      console.log("Fetched the data!");
      return resolve("skc@gmail.com");
    }, 4000));
  }
  console.log("start");
  async function runner(){
    let email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
  }
  runner();


// let promiseToSendMail = new Promise(function(resolve,reject) {

//   //sending the mail

//   let ismailed = true;

//   if (ismailed) {
//     resolve('Successfully');
//   }else{
//     reject();
//   }
// });

// promiseToSendMail.then(function(fromResolve){
//   console.log('the mail is sent ' + fromResolve)
// });



// console.log('This is a async concept');
// async function harry() {
//   console.log('Inside the harry function');
//   const respone = await fetch('https://api.github.com/users');
//   console.log('before response');
//   const users = await Response.json();
//   console.log('users resolved');
// return users;

//   return 'harry';
// }
// console.log('Before calling harry');
// let a = harry();
// console.log('After calling harry');
// console.log(a);
// a.then(data => console.log(data))
// console.log('last line of this file');