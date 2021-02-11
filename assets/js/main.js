"use strict";

// animation onload
window.onload = () => {
  const projPreviews = document.querySelectorAll('.projects-preview a')
  projPreviews[0].style.right = projPreviews[2].style.right = "0"
  projPreviews[1].style.left = "0"
}

// scroll to section
const navLinks = document.querySelectorAll('.hero a');
navLinks.forEach(link => {
  if(link.hasAttribute('data-link')) { // check if link has data-link attr
    link.addEventListener('click', e => {
      e.preventDefault(); // prevent reloading page
      // getting value of data-link
      const linkTarget = e.target.dataset.link;
      window.scrollTo({ // scroll the window
        // getting top position of the Targeted element Class (50 means sp (section padding)
        // put the scroll to the top of the targeted element (-) minus 50px of padding
        bottom: (document.getElementById(linkTarget).offsetTop) - 50,
        behavior: "smooth"
      }) 
    })
  }
});


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