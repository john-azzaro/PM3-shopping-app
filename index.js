'use strict';

const STORE = [
  {name: "apples"},
  {name: "oranges"},
  {name: "milk"},
  {name: "bread"}
];


function addItemToShoppingList(itemName) {
    STORE.push({name: itemName});
  }

function generateItemHtmlElement(item) {
  return `
    <li>
      <span class="css-shopping-item">${item.name}</span> 
    </li>
    `
}

function generateShoppingItems(shoppingList) {
  const items = shoppingList.map((item) => generateItemHtmlElement(item));
  return items.join("");
}

function renderShoppingList() {
  const shoppingListItems = generateShoppingItems(STORE);
  $('.js-shopping-list').html(shoppingListItems);
}

function handleNewItemSubmission() {
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
  handleNewItemSubmission();
}

$(handleShoppingList);