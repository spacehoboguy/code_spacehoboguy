function drawShoppingCartTable(){
    for (let i = 0; i < shoppingCart.length; i++) {
        html +=
            `<table>
                <tr>
                    <td>${shoppingCart[i].itemName}</td>
                    <td>${shoppingCart[i].noOfItems}</td>
                    <td>${shoppingCart[i].itemPrice}</td>
                    <td><b>${shoppingCart[i].itemPrice}</b></td>
                </tr>
            </table>`;
    }
}

function calculateSumOfCart (){
    for (let i = 0; i < shoppingCart.length; i++){
        cartTotal += shoppingCart[i].noOfItems * shoppingCart[i].itemPrice;
    }
    cartTotalView = `<tr>
                        <td><u><b>Total </b></td>
                        <td></td>
                        <td></td>
                        <td><b class ="sumOfCart"><u>${cartTotal} kr</b></u></td>
                    </tr>`
    console.log(cartTotal)
}