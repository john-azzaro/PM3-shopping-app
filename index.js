"use strict";




function renderShoppingList() {
    const shoppingListItemString = generateShoppingListItemString(STORE)
    $('main').html(shoppingListItemString);
}

function handleNewItemSubmit() {
    $(".js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        //
    })
}

// callback for when the page loads, rendering shopping list, activating individual
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
}
// when page loads, call "handleShoppingList"
$(handleShoppingList);