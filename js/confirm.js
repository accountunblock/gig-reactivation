const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const firstName = sessionStorage.getItem("firstName");
const middleName = sessionStorage.getItem("middleName");
const lastName = sessionStorage.getItem("lastName");
const email = sessionStorage.getItem("email");
const phone = sessionStorage.getItem("phone");
const serviceStm = sessionStorage.getItem("serviceStm");

// Retrieve the stored payStm from sessionStorage
const payStm = sessionStorage.getItem("payStm");

// Check if payStm is not null
if (payStm) {
  // Display payStm in an element with ID 'myPlatform'
  const myPlatform = document.getElementById("myPlatform");
  myPlatform.textContent = payStm; // Set the text content to payStm
} else {
  console.log("payStm not found in sessionStorage");
}

const myName = document.getElementById("myName");
const myEmailDetails = document.getElementById("myEmailDetails");
const myPhoneDetails = document.getElementById("myPhoneDetails");
const myPlatform = document.getElementById("myPlatform");
const myService = document.getElementById("myService");
const previousBtn = document.getElementById("previousBtn");
const continueBtn = document.getElementById("continueBtn");

myName.textContent = `Name: ${firstName} ${middleName} ${lastName}`;
myPhoneDetails.textContent = `Phone: ${phone}`;
myEmailDetails.textContent = `Email: ${email}`;
myPlatform.textContent = `Platform: ${payStm}`;
myService.textContent = `Service: ${serviceStm}`;

continueBtn.onclick = function(param) {
  window.location = href = "method.html";
};
previousBtn.onclick =function (param) {
  window.location = href="payment.html";
}