'use strict';
// Main: Add an item to the shopping list
// 2nd: Add delete button to the shopping list
// 3rd: Add checked button to the shopping list

// STORE is responsible for storing the underlying data the app needs to keep track of.
// the data model is pretty simple, just an array of shopping list items...
// each array item is an object with a name property...
//
const STORE = [
  {name: "apples"},
  {name: "oranges"},
  {name: "milk"},
  {name: "bread"}
];


function addItemToShoppingList(itemName) {
    STORE.push({name: itemName});
  }

  // 5: generates a string representing each sopping list item.
  //
function generateItemHtmlElement(item) {
  return `
    <li>
      <span class="css-shopping-item">${item.name}</span> 
    </li>
    `
}


// 4: This function generates a single string (via items.join("")) by mapping each item in the STORE array.
// 
function generateShoppingItems(shoppingList) {
  const items = shoppingList.map((item) => generateItemHtmlElement(item));
  return items.join("");
}


// 3: This function renders the shopping list to the DOM.
// 3.1: The variable 'shoppingListItemsString' generates the string to represetn the shopping list...
// 3.2: Then, the function inserts the HTML into the DOM...
// 3.3: The STORE parameter is passed in here.
//
function renderShoppingList() {
  const shoppingListItems = generateShoppingItems(STORE);
  $('.js-shopping-list').html(shoppingListItems);
}


// 6: listens for when the user submits an item.
// 6.1: Upon the user submitting the item...
// 6.2: event.preventDefault() stops submission behavior...
// 6.3: 
function handleNewItemSubmission() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

// 2: This function is the callback when out page first loads.
// 2.1: 'renderShoppingList' will generate the HTML and a list of items stored in STORE... 
// 2.2: 'handleNewItemSubmit' will listen for when the user submits a shopping list item...
//
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmission();
}

// 1: When the page loads, call 'handleShoppingList'.
//
$(handleShoppingList);