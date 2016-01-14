$(document).ready(function() {
  // - starting point, some way to get current time
  // - some way to display it (HTML + inject clock into HTML + CSS to style it)
  // - way to update the clock, refresh (needs to back to 0/12AM)

  // reminder:
  // $("#someId").css("color", "red");
  // $("#someId").css("font-size", "red");
  // $("#someId").css({
  //   color: "red",
  //   fontSize: "14px",
  //   backgroundColor: "blue"
  // });

  // 4 / 2 -> 2

  // 4 % 2 -> 0
  // 5 % 2 -> 1
  // 6 % 2 -> 0

  // if a number is even then % with 2 will return 0
  // otherwise if a number is odd then % with 2 will return 1

  function startTime() {
    var today = new Date();
    // today = Thu Jan 07 2016 18:42:12 GMT-0500 (EST)
    var h = today.getHours();
    // h = 18
    var m = today.getMinutes();
    // m = 42
    var s = today.getSeconds();
    // s = 12
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);


    $("#txt").html(h + ":" + m + ":" + s);
    setTimeout(startTime, 500);

        
    if(s % 2 === 1){
    $("#txt").css("color", "red");}
    else{
      $("#txt").css("color", "blue");}    
    





    //   if(s % 2 === 1){
    // $("#txt").css("font-size", 24);}
    // else{
    //   $("#txt").css("font-size", 12);}  



      if(s % 2 === 1){
        $("#txt").css("font-size", 24);}
      else{
      $("#txt").css("font-size", 12);}




  }


    

      

  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }

  startTime();

  function changeBackground(){
    console.log("here")
    
    

    if (document.getElementById("backstabber").style.backgroundColor == "orange") {
      $("#backstabber").css("background-color", "blue");
    } else {
      $("#backstabber").css("background-color", "orange");
    }

    setTimeout(changeBackground, 5000);

  }

changeBackground();
    // function switchbacks(){
    //   $("#backstabber").css("background-color", "blue");

    // }





});








