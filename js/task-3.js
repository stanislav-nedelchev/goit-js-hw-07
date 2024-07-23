const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onFieldInput = () => {
  if (nameInput.value.trim() === '') {
    return (nameOutput.textContent = 'Anonymous');
  }
  return (nameOutput.textContent = nameInput.value.trim());
};

nameInput.addEventListener('input', onFieldInput);
