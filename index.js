'use strict';

// Goals for Saturday:  
// 1: understand how to add new item to shopping list
// 2: do the checked item button
// 3: do delete item button
// Also, understand how to pass parameters from one function to another.



const STORE = [
  {name: "apples"},
  {name: "oranges"},
  {name: "milk"},
  {name: "bread"}
];

function addItemToShoppingList(itemName) {
    STORE.push({name: itemName});
  }

function generateItemElement(item, itemIndex) {
  return `
    <li class="data-item-index="${itemIndex}">
      <span class="shopping-item">${item.name}</span> 
    </li>
    `
}

function generateShoppingItemsString(shoppingList) {
  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  return items.join("");
}

function renderShoppingList() {
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  $('.js-shopping-list').html(shoppingListItemsString);
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
}

$(handleShoppingList);