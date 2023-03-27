updateView()
function updateView() {
    let html =
        `<h1>Handleliste</h1>
        <table>
        <tr>
        <th>Matvare</th>
        <th>Antall</th>
        <th>Pris</th>
        <th><u>Total:</u></th>
        </tr> `
        for (let i = 0; i < shoppingCart.length; i++) {
            html +=
                    `<tr>
                        <td>${shoppingCart[i].itemName}</td>
                        <td>${shoppingCart[i].noOfItems}</td>
                        <td>${shoppingCart[i].itemPrice}kr</td>
                        <td><b>${shoppingCart[i].noOfItems * shoppingCart[i].itemPrice}kr</b></td>
                    </tr>`;   
        }
        `</table>`;

    document.getElementById("app").innerHTML = html;
}