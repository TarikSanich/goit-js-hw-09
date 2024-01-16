import debounce from 'debounce';

const form = document.querySelector('.feedback-form');
const LOCAL_FEEDBACK_KEY = 'feedback-form-state';

try {
  const initialFormData = JSON.parse(localStorage.getItem(LOCAL_FEEDBACK_KEY)) || {};

  Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];

    if (element.name === 'email' || element.name === 'message') {
      if (storageValue !== undefined) {
        element.value = storageValue.trim();
      }
    }
  });
} catch (e) {
  console.error('LOCAL STORAGE PARSE ERROR');
}

form.addEventListener(
  'input',
  debounce(() => {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value.trim();
    });

    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify(formObject));
  }, 300)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  localStorage.removeItem(LOCAL_FEEDBACK_KEY);
  form.reset();
});
