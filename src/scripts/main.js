'use strict';

// write code here
const fieldText = document.querySelectorAll('.field-text');

function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

fieldText.forEach((input) => {
  const label = document.createElement('label');
  const nameInput = input.getAttribute('name')
    ? splitCamelCase(input.getAttribute('name'))
    : null;
  const capitalizedWords = capitalizeWords(nameInput);
  const parentInput = input.parentNode;

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('name'));
  label.textContent = nameInput.toUpperCase();

  input.setAttribute('placeholder', capitalizedWords);

  parentInput.insertBefore(label, input);
});
