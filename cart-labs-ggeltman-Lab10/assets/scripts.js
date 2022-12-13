const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {

        this.items.push(cookie)
        this.currentPrice = price + this.currentPrice
    },
    clear: function() {

        this.currentPrice = 0
        this.items = []
    },
}

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */

    console.log('The user is adding this type of cookie to their cart: ', cookie)

    //print cart.items.length to cartItems id
    document.getElementById("cartItems").innerText = cart.items.length + 1

   //add the correct price to the cart.addItem variable
   if (cookie == 'peanut butter') {
    cart.addItem(cookie, 20)
    }
    else if (cookie == 'sandies') {
    cart.addItem(cookie, 30)
    }
    else if (cookie == 'party press') {
    cart.addItem(cookie, 35)
    }
    else if (cookie == 'chocolate chip') {
    cart.addItem(cookie, 25)
    }

//print cart.addItem from if statement to hovertext id
document.querySelector(".hoverText").innerHTML = "$" + cart.currentPrice 

console.log(cart)
}

function checkout(price) {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    
    prompt(`You have ${cart.items.length} items that will cost $${cart.currentPrice}.  Please provide your Name and Address in the prompt below for your bill.\n` + '\nThank you for shopping with us!')

    cart.clear()

    document.querySelector(".hoverText").innerHTML = "$" + cart.currentPrice
    document.getElementById("cartItems").innerText = 0
    document.getElementById("cartItems").innerHTML = "&nbsp;"
}

function darkMode() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("header").style.color = "white"
} 
