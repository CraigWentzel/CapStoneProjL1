
/* Function to workout the Order Total on the Checkout Page.
   Here I take Grand Total of the Order from the Cart and I then add on the Delivery Fee onto this and minus the Voucher Discount selected */


function orderTotal(){

  var field10 = document.getElementById('grandTotal').value;
  var field11 = document.getElementById('delivery').value;
  var field12 = document.getElementById('vouchers').value;


  var order = parseFloat (field10) + parseFloat(field11) - parseFloat(field12)

  if (!isNaN(order))

       {
           document.getElementById("orderTotal").innerHTML= +order
       }
   } 