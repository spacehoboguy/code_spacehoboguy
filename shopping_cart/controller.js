
function generateShoppingCartView() {
    let cartHtml =
    `<h1>:Your Fruit Basket</h1>
    <table>
    <tr>
    <th>Product</th>
    <th>Amount</th>
    <th>Price</th>
    <th>Sum</th>
    </tr> `

    for (let i = 0; i < shoppingCart.length; i++) {
        cartHtml += `<tr>
                        <td>${shoppingCart[i].itemName}</td>
                        <td class ="numberOfItems"><button onclick ="decreaseItemAmount(${i})">-</button>${shoppingCart[i].noOfItems}<button onclick="increaseItemAmount(${i})">+</button></td>
                        <td>${shoppingCart[i].itemPrice} kr</td>
                        <td><b>${shoppingCart[i].noOfItems * shoppingCart[i].itemPrice} kr</b></td>
                    </tr>`
    }
    userView = cartHtml;
    document.getElementById("app").innerHTML = userView;
}
function calculateSumOfCart() {
    cartTotal=0;
    for (let i = 0; i < shoppingCart.length; i++) {
        cartTotal += shoppingCart[i].noOfItems * shoppingCart[i].itemPrice;
    }
    cartTotalView = `<tr>
                        <td><u><b>Total </b></td>
                        <td></td>
                        <td></td>
                        <td><b class ="sumOfCart"><u>${cartTotal} kr</b></u></td>
                    </tr>
                    `
    console.log(cartTotal)
    userView += cartTotalView
    
}

function increaseItemAmount(itemIndex) {
    shoppingCart[itemIndex].noOfItems++
    updateView()
}
function decreaseItemAmount(itemIndex) {
    if (shoppingCart[itemIndex].noOfItems > 1)
        shoppingCart[itemIndex].noOfItems--
    else {
        shoppingCart.splice(itemIndex, 1)
    }
    updateView()
}
