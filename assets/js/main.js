"use strict";

// Copyrights current year
document.querySelector('.year').innerHTML = new Date().getFullYear()

// submit Contact Form Function
const form = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  message: document.getElementById('msg'),
  submitBtn: document.getElementById('submitBtn'),
  formMassages: document.querySelector('.form-group:last-of-type')
};
form.submitBtn.addEventListener("click", (e) => {
  // stop reload
  e.preventDefault();
  // Opening request
  const request = window.XMLHttpRequest ?
    new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  // Setting request data
  const requestData = `name=${form.name.value}&email=${form.email.value}&message=${form.message.value}`;
  // send url
  const url = 'https://www.aaeqtr.com/wp-content/themes/aae_qtr/contact-form.php';
  request.open('POST', url, true);

  request.onload = function () {
    if (this.status == 200 && this.readyState == 4) {
      form.formMassages.innerHTML = this.responseText;
    } else {
      form.formMassages.innerHTML = '<p class="form-massages info">Sending...</p>';
    }
  };

  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(requestData);
});

// animation onload
window.onload = () => {
  const heroProject1 = document.querySelector('.projects-preview a:first-child')
  const heroProject2 = document.querySelector('.projects-preview a:nth-child(2)')
  const heroProject3 = document.querySelector('.projects-preview a:last-child')
  // position
  heroProject1.style.right = heroProject3.style.right = "0"
  heroProject2.style.left = "0"
}