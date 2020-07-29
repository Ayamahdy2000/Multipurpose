$(document).ready(function(){

// $(".price-card").hover(function(){
//     // $(this).hide();
//     $(this).$(".bg-red").animate({
//         height:"100%",
//         width:"100%"
      
//     })
//     ,
//     $(".bg-red").animate({
//         height:"100%",
//         width:"20%"
      
//     })
// })

$(".select").on("click",function(){
    $("#content").hide();
    $("#slider").show();
   })
   $("#exit").on("click",function(){
       $("#content").show();
       $("#slider").hide();
      })

 })





