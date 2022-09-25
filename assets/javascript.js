// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  }
  function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  }
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */

  $(document).ready(function(){
  $(".click-btn").click(function(){
  $(".dropdown-content").toggleClass("show");
  })
  });
  function openPaymet(evt, paymentName) {
    var i, paymentContent, paymentLinks;
    paymentContent = document.getElementsByClassName("paymentContent");
    for (i = 0; i < paymentContent.length; i++) {
    paymentContent[i].style.display = "none";
    }
    paymentLinks = document.getElementsByClassName("paymentLinks");
    for (i = 0; i < paymentLinks.length; i++) {
    paymentLinks[i].className = paymentLinks[i].className.replace(" paymentActive", "");
    }
    document.getElementById(paymentName).style.display = "block";
    evt.currentTarget.className += " paymentActive";
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    //Manage Payment
    
  function checkOut(evt, paymentName) {
    var i, paymentContent, paymentLinks;
    paymentContent = document.getElementsByClassName("checkoutContent");
    for (i = 0; i < paymentContent.length; i++) {
    paymentContent[i].style.display = "none";
    }
    paymentLinks = document.getElementsByClassName("checkoutLinks");
    for (i = 0; i < paymentLinks.length; i++) {
    paymentLinks[i].className = paymentLinks[i].className.replace(" checkoutActive", "");
    }
    document.getElementById(paymentName).style.display = "block";
    evt.currentTarget.className += " checkoutActive";
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("checkoutOpen").click();
    //Manag

  function managePayment(evt, paymentName) {
  var i, paymentContent, paymentLinks;
  paymentContent = document.getElementsByClassName("paymentContent1");
  for (i = 0; i < paymentContent.length; i++) {
  paymentContent[i].style.display = "none";
  }
  paymentLinks = document.getElementsByClassName("tablinks");
  for (i = 0; 
    i < paymentLinks.length; i++) {
  paymentLinks[i].className = paymentLinks[i].className.replace(" active", "");
  }
  document.getElementById(paymentName).style.display = "block";
  evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen1").click();
  //Manage Payment 2
 
  //checkOut
  
  
  //Radio button
function openRadio(radio) {
  var i;
  var x = document.getElementsByClassName("radio");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(radio).style.display = "block";  
}
//file upload element// elements

