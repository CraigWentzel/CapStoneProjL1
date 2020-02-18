/* Apply a Chained Effect for images on the Shoe Product Pages namely the NB680, NB FreshFoam and NB Zante Zola Pages */


$(document).ready(function(){
  $("button").click(function(){
    $("#img1")
      .slideUp(2000)
      .slideDown(2000);
  });
});
