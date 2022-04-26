function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const creatBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divRef = document.querySelector('#boxes');

function getInputValue() {
return Number(inputRef.value);
};

creatBtnRef.addEventListener('click', createBox);
destroyBtnRef.addEventListener('click', destroyBox);

function createBox() {
  let listsOfDiv = [];
  let value = getInputValue();
  for (let i = 0; i < value; i += 1) {
    const divList = document.createElement('div');
    divList.style.width = `${30 + i * 10}px`;
    divList.style.height = `${30 + i * 10}px`;
    divList.style.backgroundColor = getRandomHexColor();
    listsOfDiv.push(divList);
  }
  divRef.append(...listsOfDiv);
}

function destroyBox() {
  const amount = divRef.children.length;
  for (let i = 0; i < amount; i += 1) {
    divRef.firstElementChild.remove();
  }
}

