/* Implementing Session Storage into my Site in order to retain information of items */
let myCart =[];
let myproductCatalogue =[];


// Define Cart Objects and its structure
  function cartItem(img, text, cost){
        let cartObj ={};
        cartObj.img = img;
        cartObj.text = text;
        cartObj.cost =cost;
        return cartObj;

  }

  // Declaring Each Cart Item 
   let item1 = new cartItem("images/Silverback29.JPG","Silverback Stride Comp", "6999");
   let item2 = new cartItem("images/Scott29.JPG","Scott Aspect 740", "7999");
   let item3 = new cartItem("images/Giant29.JPG", "Giant XTC", "6999");
   let item4 = new cartItem("images/680.JPG","New Balance 680 V6", "1599");
   let item5 = new cartItem("images/ZanteZola.JPG","New Balance Zante Zola", "2599");
   let item6 = new cartItem("images/FreshFoam.JPG","New Balance Fresh Foam", "2899");

   myproductCatalogue.push(item1, item2, item3, item4, item5,item6); // push to array items of that are on my Products Page

// Dynamically Populate items in my Array

function populateMyCartPage(){

    let div = document.getElementById("productDiv");

    //iterate through each item in the catalogue and add it to the page
    myproductCatalogue.forEach((item)=>{

        let myItem = document.createElement("DIV");
        let addButton = document.createElement("BUTTON");
        let itemImage = document.createElement("IMG");
        let itemCost = document.createElement("P");

        addButton.onclick = function(){ addItemToCart(item); };  
        addButton.textContent = "Add To Cart";
        itemImage.setAttribute("src", item.img);
        itemCost.textContent = item.text + " R" + item.cost;

        myItem.appendChild(itemImage);
        myItem.appendChild(itemCost);
        myItem.appendChild(addButton);

        div.appendChild(myItem);

    });
}

//An event that takes my Cart Items into Session Storage so that it can be used later

function addItemToCart(cartItem) {
    myCart.push(cartItem);
    sessionStorage.setItem("myCart", JSON.stringify(myCart));  //saves array holding all cart items to session storage for retrieval at a later stage
}

populateMyCartPage();


