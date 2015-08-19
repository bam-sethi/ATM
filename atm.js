$(document).ready(function(){
  ATM();
})

//set your event listeners to a function being called in document ready
//event listeners will include deposit1 + deposit2 button and withdrawal1 and withdrawal2 button
//amount1 and amount 2
function ATM () {
  console.log('working?')
  $('#deposit1').on('click', function(event){
    console.log('clicked');
  });
  $('#deposit2').on('click', function(event){
    console.log('clicked');
  });
  $('#withdraw1').on('click', function(event){
    console.log('clicked');
  });
  $('#withdraw2').on('click', function(event){
    console.log('clicked');
  });
  //variable for input box 1 and 2 needs to be able to get numeric value
  // //when there is input in amount one put it in the balance 1/2 box
  //there is another way to do this with toggling class addCLass removeClass(try this if time)
  $('#amount1').change(function(){
    var amountOne = parseInt(($(this).val()));
    $('#balance1').html('$' + amountOne);
    if(amountOne <= 0) {
    $('#balance1').css('background-color', 'red');
  } else {
    $('#balance1').css('background-color', '#E3E3E3');
  }
});
  $('#amount2').change(function(){
    var amountTwo = parseInt($(this).val());
    $('#balance2').html('$' + amountTwo);
      if(amountTwo <= 0) {
    $('#balance2').css('background-color', 'red');
  } else {
    $('#balance2').css('background-color', '#E3E3E3');
  }
  });


}

//

