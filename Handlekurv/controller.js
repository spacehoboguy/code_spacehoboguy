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