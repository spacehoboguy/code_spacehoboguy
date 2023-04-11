
function generateShoppingCartView() {
    let cartHtml =
        `<span>
        <div class="menuBar">
            <div class="menuItem" onclick="changeView('home_store')">Home</div>
            <div class="menuItem" onclick="changeView('home_store')">Menu</div>
            <div class="menuItem" onclick="changeView('shopping_cart')">Fruit Basket</div>
        </div>
    </span>
    <h1>:Your Fruit Basket</h1>
    <table>
    <tr>
    <th>Product</th>
    <th>Amount</th>
    <th>Price</th>
    <th>Sum</th>
    </tr> `

    for (let i = 0; i < shoppingCart.length; i++) {
        cartHtml += `<tr>
                        <td> <img class="cartImage"src=${shoppingCart[i].itemSrc}></img>${shoppingCart[i].itemName}</td>
                        <td class ="numberOfItems"><button onclick ="decreaseItemAmount(${i})">-</button>${shoppingCart[i].noOfItems}<button onclick="increaseItemAmount(${i})">+</button></td>
                        <td>${shoppingCart[i].itemPrice} kr</td>
                        <td><b>${shoppingCart[i].noOfItems * shoppingCart[i].itemPrice} kr</b></td>
                    </tr>`
    }
    userView = cartHtml;
    document.getElementById("app").innerHTML = userView;
}
function calculateSumOfCart() {
    cartTotal = 0;
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
    userView += `<b><u class="totalSum">Din total sum er ${cartTotal} kr</u></b>`;

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
function changeView(selectedPage) {
    console.log(selectedPage, "<- selectedPage")
    let incomingPage = selectedPage;
    appState.currentView = incomingPage;
    console.log(incomingPage, "<- incomingPage");
    updateView();
}

function generateStoreView() {
    userView = ``;
    let storeHtml = `
    <div class="menuBar">
        <div class="menuItem" onclick="changeView('home_store')">Home</div>
        <div class="menuItem" onclick="changeView('about')">About</div>
        <div class="menuItem" onclick="changeView('shopping_cart')">Fruit Basket</div>
    </div>
    <div class="itemGrid">`;

    for (let i = 0; i < storeContent.length; i++) {
        storeHtml += `<div class="itemCard" onclick="addToCart(${i})">
            <div>
            <img class="itemImage" src="${storeContent[i].itemSrc}" width="600">
            </div>
            <div class="itemName">${storeContent[i].itemName}</div>
            <div class="itemPrice"></div>
        </div> `;
    }
    ` </div>`;
    userView = storeHtml;
    console.log(appState.currentView)
    document.getElementById("app").innerHTML = userView;
}
function addToCart(addedItemIndex) {
    let itemToPush = storeContent[addedItemIndex];
    shoppingCart.push(itemToPush)
    console.log(itemToPush, "<-Item to push")
}
