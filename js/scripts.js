$(document).ready(function() {
  
  $("form#form1").submit(function(event) {
    event.preventDefault();

    let favAnimal = $("input#fav-animal").val();
    let favPlace = $("input#fav-place").val();
    let favFood = $("input#fav-food").val();
    let arrayName = [];
    arrayName.push(favAnimal, favPlace, favFood);
    const arrayElements = [];
    $("ul").append("<li>" + arrayName[0] );
    $("ul").append("<li>" + arrayName[1] );
    $("ul").append("<li>" + arrayName[2] );
    console.log(arrayName);
   
   arrayName.forEach(function(thing){
     $('ul').append("<li>" + thing);
   });
  });
  
});