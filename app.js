document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector(#'new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  const animalListItem = createAnimalItem(event.target);
  const animalList = document.querySelector('#animal-list');
  animalList.appendchild(animalListItem);

  event.target.reset();
}
