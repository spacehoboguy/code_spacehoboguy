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
function updateStoreView() {

    if (appState.currentView == "store") {
        appState.currentView = "store";
        
        generateStoreView()
       
     
    
    } else {

    }

    document.getElementById("app").innerHTML = userView;
}