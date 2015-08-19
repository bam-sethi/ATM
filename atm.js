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
  //not logging an inputed value yet but recognised
  var amountOne = $('#amount1').val();
  var amountTwo = $('#amount2').val();
  console.log(amountOne);
  console.log(amountTwo);
}