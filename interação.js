function FahParaCel(){


var fahrenheit=parsefloat(document.getElementById("fahrenheitinput").value);

var	celsius = (fahrenheit - 32)*(5/9);

document.getElementById(resultado).innerHTML=fahrenheit + "fahrenheit = " + celsius.tofixed(2) + "celsius";
}