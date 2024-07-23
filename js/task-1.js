const totalItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${totalItem.length}`);

totalItem.forEach(function (elem) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
