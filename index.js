"use strict";




function renderShoppingList() {
    const shoppingListItemString = generateShoppingListItemString(STORE)
    $('main').html(shoppingListItemString);
}

// when the user submits a new iem, push new item onto the store and re-render list from the DOM.
function handleNewItemSubmit() {
    // upon the user clicking the submit button...
    $(".js-shopping-list-form").submit(function(event) {
        // prevent defualt form submission behavior (no reset)...
        event.preventDefault();
        // new item variable...
        const newItemName = $('.js-shopping-list-entry').val();
        $('.js-shopping-list-entry').val("").
        addItemToShoppingList();
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