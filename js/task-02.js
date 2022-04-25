const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const ingredientsRef = ingredients.map((ingredient) => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList = "item";
  return liRef;
});

ulRef.append(...ingredientsRef);
console.log(ingredientsRef);