import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.work-form');
const emailEl = document.querySelector('.work-form input[name=email]');
const commentsEl = document.querySelector('.work-form input[name=comment]');
const succesEl = document.querySelector('.work-form-succes');
const invalidEl = document.querySelector('.work-form-invalid');
const bodyEl = document.querySelector('body');

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

formEl.addEventListener('submit', event => {
  event.preventDefault();
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
      .then(post => {
        iziToast.show({
          class: 'work-modal',
          id: 'custom-modal',
          title: post.title,
          theme: 'dark',
          message: post.message,
          position: 'center',
          timeout: false,
          overlay: true,
          close: true,
          closeOnEscape: true,
          closeOnClick: false,
          onOpened: () => {
            bodyEl.style.overflow = 'hidden';
          },
          onClosed: () => {
            bodyEl.style.overflow = 'scroll'
          }
        });
        formEl.reset();
      })
      .catch(error => {
        alert(error);
        emailEl.value = formDataEl.email;
        commentsEl.value = formDataEl.comment;
      });
    localStorage.removeItem(localKey);
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
