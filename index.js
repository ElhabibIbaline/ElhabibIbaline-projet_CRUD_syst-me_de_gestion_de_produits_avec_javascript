//importer des inputs
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// Verifier les inputs dans la console
// console.log(title, price, taxes, ads, discount, total, count, category, submit);

//getTotal + modifier le html (onkeyup)
function getTotal() {
    // console.log('done');

    if (price.value != "") {
      let result = +price.value + +taxes.value + +ads.value - +discount.value;
      total.innerHTML = result;
  
      total.style.background = "#040"; //vert
    } else {
      total.innerHTML = "";
      total.style.background = "#a00d02"; //rouge
    }
  }