let appState = {
  currentView: "shopping_cart",
  userType: "default"
}

let cartTotal = 0;
let addedTotal;
let userView;

let cartHtml;

let cartTotalView;
let storeContent = [
  {
    itemName: "Apple",
    itemPrice: 10,
    noOfItems: 1,
    itemSrc: "apple.jpg",
  },
  {
    itemName: "Banana",
    itemPrice: 8,
    noOfItems: 1,
    itemSrc: "banana.jpg",
  },
  {
    itemName: "Mango",
    itemPrice: 12,
    noOfItems: 1,
    itemSrc: "mango.jpg",
  },
  {
    itemName: "Pineapple",
    itemPrice: 20,
    noOfItems: 1,
    itemSrc: "pineapple.jpg",
  },
  {
    itemName: "Tangerine",
    itemPrice: 8,
    noOfItems: 1,
    itemSrc: "tangerine.jpg",
  }
]
let shoppingCart = [
  {
    itemName: "Apple",
    itemPrice: 10,
    noOfItems: 1,
    itemSrc: "apple.jpg"
  },
  {
    itemName: "Banana",
    itemPrice: 8,
    noOfItems: 1,
    itemSrc: "banana.jpg",
  },
  {
    itemName: "Mango",
    itemPrice: 12,
    noOfItems: 1,
    itemSrc: "mango.jpg",
  }
  
]