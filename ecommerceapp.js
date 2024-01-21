// Food Ordering Application
const menu = [
    { id: 1, name: "Beans", price: 600 },
    { id: 2, name: "Noodles", price: 1000 },
    { id: 3, name: "Fried Rice", price: 2000 },
    { id: 4, name: "Fried Plantain", price: 1200},
    { id: 5, name: "Jollof Spaghetti", price: 1800},
];

let cart = [];

function displayMenu() {
    console.log("MENU:");
    menu.forEach(item => {
        console.log(`${item.id}. ${item.name} - ${item.price}`);
    });
}

function addToCart(itemId) {
    const selectedItem = menu.find(item => item.id === itemId);
    if (selectedItem) {
        cart.push(selectedItem);
        console.log(`${selectedItem.name} added to cart.`);
    } else {
        console.log("Invalid item ID.");
    }
}

function displayCart() {
    console.log("CART:");
    cart.forEach(item => {
        console.log(`${item.name} - ${item.price}`);
    });
}

function checkout() {
    if (cart.length === 0) {
        console.log("Your cart is empty. Add items before checking out.");
    } else {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        console.log(`Order placed! Total amount: ${total}`);
        console.log(`Thank you! We appreciate your patronage.`)
        cart = [];
    }
}

// Application usage:
displayMenu();
addToCart(1);
addToCart(4);
displayCart();
checkout();