const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//getting the elements from html
const myFirstName = document.getElementById("myFirstName");
const myMiddleName = document.getElementById("myMiddleName");
const myLastName = document.getElementById("myLastName");
const myEmail = document.getElementById("myEmail");
const myPhone = document.getElementById("myPhone");

const botCheckBox = document.getElementById("botCheckBox");
const unblockCheckBox = document.getElementById("unblockCheckBox");
const uberPayRadio = document.getElementById("uberPayRadio");
const uberEatsPayRadio = document.getElementById("uberEatsPayRadio");
const ninePayRadio = document.getElementById("ninePayRadio");
const lyftPayRadio = document.getElementById("lyftPayRadio");
const glovoPayRadio = document.getElementById("glovoPayRadio");
const tvdePayRadio = document.getElementById("tvdePayRadio");
const boltPayBtn = document.getElementById("boltPayBtn");
const othersPayRadio = document.getElementById("othersPayRadio");

const payBtn = document.getElementById("payBtn");

let firstName;
let middleName;
let lastName;
let email;
let phone;
let serviceStm;
let payStm;

payBtn.onclick = function(ifparam) {
  event.preventDefault();
  firstName = myFirstName.value.trim();
  middleName = myMiddleName.value.trim();
  lastName = myLastName.value.trim();
  email = myEmail.value.trim();
  phone = myPhone.value.trim();

  if (botCheckBox.checked && unblockCheckBox.checked) {
    serviceStm = "Bot Grabber and Unblock";
  } else if (botCheckBox.checked) {
    serviceStm = "Bot Grabber";
  } else if (unblockCheckBox.checked) {
    serviceStm = "Unblock";
  } else {
    serviceStm = "please select your service";
  };


  // Assuming you have defined these variables correctly
  if (uberPayRadio.checked) {
    payStm = "Uber";
  } else if (uberEatsPayRadio.checked) {
    payStm = "Uber Eats";
  } else if (ninePayRadio.checked) {
    payStm = "99";
  } else if (lyftPayRadio.checked) {
    payStm = "Lyft";
  } else if (glovoPayRadio.checked) {
    payStm = "Glovo";
  } else if (tvdePayRadio.checked) {
    payStm = "TVDE";
  } else if (boltPayBtn.checked) { // Make sure to check if the radio is checked
    payStm = "Bolt";
  } else if (othersPay.checked) { // Ensure you're using the correct variable
    payStm = "Others";
  } else {
    payStm = "Please select a platform";
  }


firstName = myFirstName.value.trim();
middleName = myMiddleName.value.trim();
lastName = myLastName.value.trim();
email = myEmail.value.trim();
phone = myPhone.value.trim();

let errorMessage = "";

// Check if required fields are filled
if (!firstName || !lastName || !email || !phone) {
  errorMessage = "Please fill out all required fields: First Name, Last Name, Email, and Phone.";
}

// Validate if at least one service is selected
if (!botCheckBox.checked && !unblockCheckBox.checked) {
  errorMessage += "\nPlease select at least one service (Bot Grabber or Unblock).";
}

// Validate if a platform is selected
if (!uberPayRadio.checked && !uberEatsPayRadio.checked && !ninePayRadio.checked &&
  !lyftPayRadio.checked && !glovoPayRadio.checked && !tvdePayRadio.checked &&
  !boltPayBtn.checked && !othersPay.checked) {
  errorMessage += "\nPlease select a platform.";
}

// If there's an error, display the message and stop form submission
if (errorMessage) {
  alert(errorMessage); 
  return; 
}


  sessionStorage.setItem("payStm", payStm);
  sessionStorage.setItem("serviceStm", serviceStm);

  sessionStorage.setItem("firstName", myFirstName.value);
  sessionStorage.setItem("middleName", myMiddleName.value);
  sessionStorage.setItem("lastName", myLastName.value);
  sessionStorage.setItem("email", myEmail.value);
  sessionStorage.setItem("phone", myPhone.value);

  window.location = href = "confirm.html";
}