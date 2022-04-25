function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');

btnRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
})