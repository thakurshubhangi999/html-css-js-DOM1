
var x = document.getElementById("myBtn");

x.addEventListener("mouseover", function1);
x.addEventListener("mouseout", function2);
x.addEventListener("click", function3);

function function1(){document.getElementById("mouseover").innerHTML="mouse over!";}
function function2(){document.getElementById("mouseout").innerHTML="mouse out!";}
function function3(){document.getElementById("click").innerHTML="click!";}


