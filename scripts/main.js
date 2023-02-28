
// image switcher code
let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "tarot2.jpg");
  } else {
    myImage.setAttribute("src", "history-of-tarot-cards-1.jpg");
  }
 };

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
  
    