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


}

  //variable for input box 1 and 2 needs to be able to get numeric value
  // //when there is input in amount one put it in the balance 1/2 box
  $('#amount1').change(function(){
    var amountOne = parseInt(($(this).val()));
    $('#balance1').html('$' + amountOne);
  });
  $('#amount2').change(function(){
    var amountTwo = parseInt($(this).val());
    $('#balance2').html('$' + amountTwo);
  });







