const itemsRef = document.querySelectorAll('li.item');
console.log("Number of categories: " + itemsRef.length);

itemsRef.forEach((item) => {
    const liFef = item.querySelectorAll('ul>li');
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + liFef.length);
})