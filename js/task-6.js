function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = controls.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  destroyBoxes();
  const arrayOfBoxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    arrayOfBoxes.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`,
    );
    size += 10;
  }
  const arrayOfDiv = arrayOfBoxes.join('');
  return boxes.insertAdjacentHTML('beforeend', arrayOfDiv);
}

function amountVerification() {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert(`Your number must be between 1 and 100`);
    return;
  }
  createBoxes(amount);
  input.value = '';
}

btnCreate.addEventListener('click', amountVerification);
btnDestroy.addEventListener('click', destroyBoxes);
