$(document).ready(function(){
  ATM();
})

//set your event listeners to a function being called in document ready
//event listeners will include deposit1 + deposit2 button and withdrawal1 and withdrawal2 button
//amount1 and amount 2
function ATM () {
var amountOne;
  $('#deposit1').on('click', function(event){
    console.log('clicked');
  });
  $('#deposit2').on('click', function(event){
    console.log('clicked');
  });
  $('#withdraw1').on('click', function(event){
    console.log('clicked');
//this is wrong because #balance1 does not contain a number value
//you need to store the number from amount 1 the when u collect the deposit
//and subract it from the new value !!!!!!!
    // debugger;
    // var balance1 = parseInt($('#balance1').val());
    // if (amountOne > balance1){
    // console.log('u cant afford that')
    // } else if (amountOne <= balance1){
    // var withDraw = (balance1 - amountOne)
    // $('#amount1').html(withDraw)
    // }
  });
  $('#withdraw2').on('click', function(event){
    console.log('clicked');
  });
  //variable for input box 1 and 2 needs to be able to get numeric value
  // //when there is input in amount one put it in the balance 1/2 box
  //there is another way to do this with toggling class addCLass removeClass(try this if time)
  $('#amount1').change(function(){
    amountOne = parseInt(($(this).val()));
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

    //   $('#amount1').change(function(){
    // var amountOne = parseInt(($(this).val()));
    // return amountOne;
    //         if (amountOne > balance1){
    //       console.log('u cant afford that')
    //     }
    //     else if (amountOne <= balance1){
    //       balance1 - amountOne
    //     }
    //   });



//when you press the withdraw button subtract the amount entered in the box if the amount is not greater than the current value
//if amountOne > balance1
  // do not withdraw(take no action)
//else if amountOne <= balance1
  //subtract the amount of balance1 from amount 1
  // if (amountOne > balance1){
  //   console.log('u cant afford that')
  // }
  // else if (amountOne <= balance1){
  //   balance1 - amountOne
  // }