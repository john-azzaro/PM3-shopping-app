"use strict";



// render the shopping list in the DOM
function renderShoppingList() {
// generate a string to 
    const shoppingListItemString = generateShoppingListItemString(STORE)
    $('main').html(shoppingListItemString);
}

// when the user submits a new iem, push new item onto the store and re-render list from the DOM.
function handleNewItemSubmit() {
// upon the user clicking submit...
    $(".js-shopping-list-form").submit(function(event) {
// prevent default form submission behavior (no reset)...
        event.preventDefault();
        // new item variable...
        const newItemName = $('.js-shopping-list-entry').val();
// reset input field
        $('.js-shopping-list-entry').val("").
// run "addItemToShoppingList" and pass our new user-input "NewItemName" as a parameter.
        addItemToShoppingList(newItemName);
        renderShoppingList();
    })
}

// callback for when the page loads, rendering shopping list, activating individual functions.
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
}
// when page loads, call "handleShoppingList"
$(handleShoppingList);