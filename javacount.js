var countDownDate = new Date("August 27, 2021 00:00:01").getTime();
            
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("hitung").innerHTML ="<span class='count'>" + days + "D</span> " + ": " + "<span class='count'>" + hours + "H</span> "
  + ":" + " <span class='count'>" + minutes + "M</span> " + ":" + " <span class='count'>" + seconds + "S</span> " ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("coming").innerHTML = "Here's the day";
    document.getElementById("hitung").innerHTML = "<a href='https://jlssihotang.github.io/hers/main.html'>27 August 2021</a>";
  }
}, 1000);
