updateView()
function updateView() {
    
    let html =
        `<h1>Fruit Basket</h1>
        <table>
        <tr>
        <th>Product</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Sum</th>
        </tr> `
    for (let i = 0; i < shoppingCart.length; i++) {
        html +=
            `<tr>
                <td>${shoppingCart[i].itemName}</td>
                <td class ="numberOfItems">${shoppingCart[i].noOfItems}</td>
                <td>${shoppingCart[i].itemPrice} kr</td>
                <td><b>${shoppingCart[i].noOfItems * shoppingCart[i].itemPrice} kr</b></td>
            </tr>`
    }
    calculateSumOfCart()
    html += cartTotalView



    document.getElementById("app").innerHTML = html;
}