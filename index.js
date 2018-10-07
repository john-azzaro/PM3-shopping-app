'use strict';

const STORE = [
  {name: "apples"},
  {name: "oranges"},
  {name: "milk"},
  {name: "bread"}
];


function addItemToList(itemName) {
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
  const listItems = generateShoppingItems(STORE);
  $('.js-shopping-list').html(listItems);
}

function handleNewItemSubmission() {
  $('main').submit('#js-shopping-list-form', function(event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToList(newItemName);
    renderShoppingList();
  });
}

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmission();
}

$(handleShoppingList);