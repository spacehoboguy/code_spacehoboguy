updateView()
function updateView() {

    if (appState.currentView == 'shopping_cart') {
        

        generateShoppingCartView()
        calculateSumOfCart()
        cartHtml += cartTotalView

    } else if (appState.currentView == 'home_store') {
        
        generateStoreView()
       
    }
}

