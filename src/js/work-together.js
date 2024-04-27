const formEl = document.querySelector('.work-form');
const emailEl = document.querySelector('.work-form input[name=email]');
const commentsEl = document.querySelector('.work-form input[name=comment]');
const succesEl = document.querySelector('.work-form-succes');
const invalidEl = document.querySelector('.work-form-invalid')

succesEl.style.display = 'none';
invalidEl.style.display = 'none';

const localKey = 'work-form-state';
let formDataEl = {};

fillFormFields();

formEl.addEventListener(
  'input',
  event => {
    formDataEl[event.target.name] = event.target.value;
    localStorage.setItem(localKey, JSON.stringify(formDataEl));
  }
);

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (emailEl.value !== '' && commentsEl.value !== '') {
    console.log(formDataEl);
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