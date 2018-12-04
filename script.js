var section = document.querySelector(".signup-section");

function signup() {
    // window.location.href='signup.html';
    section.style.display = 'block';
}

function closeWindow() {
    section.style.display = 'none';
}

var buttons = document.querySelectorAll("button.signup-btn");

for (let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', signup);
}

var button = document.querySelector("button.click-me");
button.addEventListener("click", greetUser);

function greetUser() {
    var userName = prompt("Hey, what's your name?");
    alert("Welcome, " + userName);
}

var paragraph = document.querySelector("p.experiment-p");

paragraph.addEventListener("click", changeName);

function changeName() {
    var myName = prompt("Please, enter your name.");
    localStorage.setItem('name', myName);
    paragraph.textContent = "Actual user: " + myName;
}

if(!localStorage.getItem('name')) {
    chagneName();
} else {
    var storedName = localStorage.getItem('name');
    paragraph.textContent = 'Actual user: ' + storedName;
  }