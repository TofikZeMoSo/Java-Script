sessionStorage.setItem('key', 0);

const ele1 = document.getElementById('p1');
const ele2 = document.getElementById('p2');

let localNumber = localStorage.getItem('key');
if(!localNumber){
  localStorage.setItem('key', 0);
}

ele1.innerText = localStorage.getItem('key');
ele2.innerText = sessionStorage.getItem('key');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  localNumber = localStorage.getItem('key');

  let sessionNumber = sessionStorage.getItem('key');
  localStorage.setItem('key', Number.parseInt(localNumber) + 1);
  sessionStorage.setItem('key', Number.parseInt(sessionNumber) + 1);
  ele1.innerText =  localStorage.getItem('key');
  ele2.innerText =  sessionStorage.getItem('key');
});

// Reset local storage to 0
function clickReset() {

    localStorage.setItem("p1", "0");
    // Write the value to the div
    document.getElementById("p1").innerHTML = '0'
  }





//  // This function increases the count
//  function clickButtonFunction() {

//     console.log('run');
  
//     //Check to see if the localstorage variable exists. 
//     //If it does not, this is the first time coming to the page, 
//     //and we need to initalize it to 0

//     if (localStorage.getItem("p1") === null) {
//       // Store
//       localStorage.setItem("p1", "0");
//     }
  
//     // Get the value from local storage
//     var value = parseInt(localStorage.getItem("p1"));
  
//     // Incrememtnt the count by 1
//     var newValue = value + 1
  
//     //Write the value back to local storage
//     localStorage.setItem("p1", newValue);
  
  
//     // Write the value to the div
//     document.getElementById("p1").innerHTML = newValue
  
//   }
// // Reset local storage to 0
// function clickReset() {

//     localStorage.setItem("p1", "0");
//     // Write the value to the div
//     document.getElementById("p1").innerHTML = '0'
//   }


