/* Create a function to ensure items are added to the cart */

let myCart =[];

function fetchCartItems(){
   myCart = JSON.parse(sessionStorage.getItem("myCart"))
}
 

// Dynamically populate table based on what items have been added to the Cart

function populateMyCartPage(){
    fetchCartItems();
    let table = document.getElementById("shoppingCartTable");


    if (myCart!= null) //Ensure there are no items in my Shopping Cart
    	myCart.forEach((item) => {

            let row = document.createElement("TR");
            let img = document.createElement("TD");
            let text = document.createElement("TD");
            let itemImage = document.createElement("IMG");
            let itemCost = document.createElement("P");

            itemImage.setAttribute("src", item.img);
            itemCost.textContent = item.text + " R" + item.cost;

            img.appendChild(itemImage);
            text.appendChild(itemCost);

            row.appendChild(img);
            row.appendChild(text);

            table.appendChild(row);

        });

}

populateMyCartPage();


 
/* Calculate the Order Total with Discounts and Delivery Options including the 15% VAT */


function calculateOrderTotal(){
  
  var product = document.getElementById('Products').value;
  var quantity = document.getElementById('Quantity').value;
  var vat = document.getElementById('VAT').value;
  var discount = document.getElementById('Discount').value;
  var delivery = document.getElementById('DeliveryOption').value;


grandTotal = parseFloat(product) * parseFloat(quantity) + (parseFloat(product) * parseFloat(quantity) *0.15) + parseFloat(delivery) - parseFloat(discount)

if (!isNaN(grandTotal))

       {
           document.getElementById("orderTotal").innerHTML= + grandTotal;
       }
   } 


 /* Alert to Confirm that the Order has been place */

 function OrderConfirmation(){

   alert ('Thank You For Shopping With Craig Ryan.');



 }