"use strict";

// animation onload
window.onload = () => {
  const projPreviews = document.querySelectorAll('.projects-preview a')
  projPreviews[0].style.right = projPreviews[2].style.right = "0"
  projPreviews[1].style.left = "0"
}
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


// Copyrights current year
document.querySelector('.year').innerHTML = new Date().getFullYear()