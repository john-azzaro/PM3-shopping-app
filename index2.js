"use strict"
// user story
// 1. the app should display all the items on the list
// 2. the app should allow the user to add an item to the list.
// 3. the app should let the user delete the item from the list.
// 4. the app should let the user check off the item from the list.


// function stubs //


STORE = [
    {name: "apples"},
    {name: "oranges"},
    {name: "pears"}
];

function renderShoppingList() {
    // renders the shopping list to the DOM.
}

function handleAddNewItem() {
    // when clicked, the item will be added to the shopping list.
}

function handleShoppingList() {
    renderShoppingList();
    handleAddNewItem();
}

$(handleShoppingList)