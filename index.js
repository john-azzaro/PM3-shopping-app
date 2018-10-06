"use strict";


function renderShoppingList() {
    const shoppingListItemString = generateShoppingListItemString(STORE)
    $('main').html(shoppingListItemString);
}


function handleShoppingList() {
    renderShoppingList();
}

$(handleShoppingList);