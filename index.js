'use strict';
// Main: Add an item to the shopping list
// 2nd: Add delete button to the shopping list
// 3rd: Add checked button to the shopping list



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

// 2: This function is the callback when out page first loads...
// 2.1: 'renderShoppingList' will generate the HTML and a list of items stored in STORE... 
// 2.2: 'handleNewItemSubmit' will listen for when the user submits a shopping list item...
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
}

// 1: When the page loads, call 'handleShoppingList'
$(handleShoppingList);