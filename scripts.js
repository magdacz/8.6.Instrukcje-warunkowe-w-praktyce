var a = 5;
var b = 6;
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
  console.log("wynik dodatni")
}

if (value < 0) {
  console.log("wynik ujemny")
};

if (value == 0) {
  console.log("wynik jest równy zero")
} else { 
    console.log("wynik nie jest równy zero")
}

var zero = value == 0 ? "Wynik jest równy zero" : "Wynik nie jest równy zero";
console.log(zero);



  