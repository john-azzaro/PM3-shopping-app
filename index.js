'use strict';

const STORE = [
  {name: "apples", checked: false},
  {name: "oranges", checked: false},
  {name: "milk", checked: false},
  {name: "bread", checked: false}
];

function getItemIndexFromElement(item) {
    const itemIndexString = $(item)
      .closest('.js-item-index-element')
      .attr('data-item-index');
    return parseInt(itemIndexString, 10);
  }

function addItemToShoppingList(itemName) {
    STORE.push({name: itemName, checked: false});
  }

function generateItemElement(item, itemIndex, template) {
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span> 
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
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);