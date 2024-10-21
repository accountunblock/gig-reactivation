const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/*getting the elements from html*/
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
  firstName = myFirstName.value.trim();
  middleName = myMiddleName.value.trim();
  lastName = myLastName.value.trim();
  email = myEmail.value.trim();
  phone = myPhone.value.trim();

  if (botCheckBox.checked && unblockCheckBox.checked) {
    serviceStm = "you selected both Bot Grabber and Unblock";
  } else if (botCheckBox.checked) {
    serviceStm = "you selected Bot Grabber";
  } else if (unblockCheckBox.checked) {
    serviceStm = "you selected Unblock";
  } else {
    serviceStm = "please select your service";
  };


  // Assuming you have defined these variables correctly
  if (uberPayRadio.checked) {
    payStm = "Your platform is Uber";
  } else if (uberEatsPayRadio.checked) {
    payStm = "Your platform is Uber Eats";
  } else if (ninePayRadio.checked) {
    payStm = "Your platform is 99";
  } else if (lyftPayRadio.checked) {
    payStm = "Your platform is Lyft";
  } else if (glovoPayRadio.checked) {
    payStm = "Your platform is Glovo";
  } else if (tvdePayRadio.checked) {
    payStm = "Your platform is TVDE";
  } else if (boltPayBtn.checked) { // Make sure to check if the radio is checked
    payStm = "Your platform is Bolt";
  } else if (othersPay.checked) { // Ensure you're using the correct variable
    payStm = "Other Platform";
  } else {
    payStm = "Please select a platform";
  }
  
  // Save the value to sessionStorage
  sessionStorage.setItem("payStm", payStm);
  sessionStorage.setItem("serviceStm", serviceStm);

  sessionStorage.setItem("firstName", myFirstName.value);
  sessionStorage.setItem("middleName", myMiddleName.value);
  sessionStorage.setItem("lastName", myLastName.value);
  sessionStorage.setItem("email", myEmail.value);
  sessionStorage.setItem("phone", myPhone.value);

  window.location = href = "confirm.html";
}