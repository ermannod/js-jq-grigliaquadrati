$(document).ready(function() {

  // create a 8x8 grid
  for (var i = 0; i < 64; i++) {
    $(".container").append("<span class='square grey'></span>");
   };

  // Generate 15 random red background squares
  var red = [];
  while (red.length < 15) {
    // get random numbers
    var redNumb = getRndInteger (1,64);
    // push unique randomly generated numbers and add class backgound red
    if (!red.includes(redNumb)){
      red.push(redNumb);
      $('span').eq(redNumb).addClass("activeRed");
    // all others get a green backgound
    } else{
      $('span').addClass("active");
    }
  }


  //discover color on click
  $(".square").click(function() {
   $(this).removeClass('grey');
  });

  //reset the game
  $("button").click(function() {
    location.reload();
  })


  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

});
