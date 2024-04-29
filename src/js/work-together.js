const formEl = document.querySelector('.work-form');
const emailEl = document.querySelector('.work-form input[name=email]');
const commentsEl = document.querySelector('.work-form input[name=comment]');
const succesEl = document.querySelector('.work-form-succes');
const invalidEl = document.querySelector('.work-form-invalid');
const ellipsEl = document.querySelector('.work-form-btn-ellipse');

const modalEl = document.querySelector('#work-modal');
const closeEl = document.querySelector('#work-modal-close');
const modalTitle = document.querySelector('#work-modal-title');
const modalMessage = document.querySelector('#work-modal-message');

succesEl.style.display = 'none';
invalidEl.style.display = 'none';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const localKey = 'work-form-state';
let formDataEl = {};

fillFormFields();

formEl.addEventListener('input', event => {
  formDataEl[event.target.name] = event.target.value;
  localStorage.setItem(localKey, JSON.stringify(formDataEl));

  if (emailEl.validity.valid) {
    succesEl.style.display = 'block';
    invalidEl.style.display = 'none';
    emailEl.style.borderColor = '#3CBC81';
  } else {
    succesEl.style.display = 'none';
    invalidEl.style.display = 'block';
    emailEl.style.borderColor = '#E74A3B';
  }
});

function openModal(title, message) {
  modalTitle.innerText = title;
  modalMessage.innerText = message;
  modalEl.style.display = "block";

  document.addEventListener("DOMContentLoaded", () => {
    closeEl.onclick = function() {
        modalEl.style.display = "none";
    }
    window.onclick = function(event) {
      // console.log(event.target);
      //   if (event.target === modalEl) {
            modalEl.style.display = "none";
        // }
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  closeEl.onclick = function() {
      modalEl.style.display = "none";
  }
  window.onclick = function(event) {
    console.log(event.target);
    console.log(modalEl);
      if (event.target === modalEl) {
          modalEl.style.display = "none";
      }
  }
})

formEl.addEventListener('submit', event => {
  event.preventDefault();
  ellipsEl.setAttribute('fill', '#e0373f');
  succesEl.style.display = 'none';
  emailEl.style.borderColor = '#1c1d20';
  if (emailEl.value !== '' && commentsEl.value !== '') {
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formDataEl),
    };
    fetch(BASE_URL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(post => openModal(post.title, post.message))
      .catch(error => console.log(error));
  
      localStorage.removeItem(localKey);
    event.currentTarget.reset();
    return;
  }
  alert('All fields must be filled!');
});

function fillFormFields() {
  const saveFormFields = localStorage.getItem(localKey);
  if (saveFormFields) {
    formDataEl = JSON.parse(saveFormFields);
    emailEl.value = formDataEl.email || '';
    commentsEl.value = formDataEl.comment || '';
  }
}