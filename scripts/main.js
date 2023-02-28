
// image switcher code
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/tarot1.jpg') {
    myImage.setAttribute ('src','images/tarot2.jpg');
  } else {
    myImage.setAttribute ('src','images/tarot1.jpg');
  }
}



 //personalized welcome message code


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my webpage, ${myName}`;
    }
  }
  
myButton.onclick = () => {
    setUserName();
  };
  
    
