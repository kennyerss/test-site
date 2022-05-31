// Image switcher
let myImage = document.querySelector('img'); // stores reference to <img> element in myImage variable

myImage.onclick = function() { // make onclick event handler property equal to anonymous function   
    let mySrc = myImage.getAttribute('src'); // retrieves value of image's src attribute
    if (mySrc === 'images/mozilla.png') {
        myImage.setAttribute('src', 'images/frog.jpg'); // changes image's src attibute to frog picture
    } else {
        myImage.setAttribute('src', 'images/mozilla.png'); // otherwise, sets src attribute back to mozilla
    }
}

// Personalized welcome message
let myButton = document.querySelector('button'); // stores reference to button element in myImage variable
let myHeading = document.querySelector('h1'); // stores reference to h1 element in myImage variable

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }

// Sets username everytime you click on button
myButton.onclick = function() { 
    setUserName();
}