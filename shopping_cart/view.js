updateView()
function updateView() {

    if (appState.currentView == "shopping_cart") {
        appState.currentView = "shopping_cart";
        
        
        generateShoppingCartView()
        calculateSumOfCart()
        cartHtml += cartTotalView
    
    } else {

    }

    document.getElementById("app").innerHTML = userView;
}