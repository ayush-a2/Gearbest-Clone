import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


function getById(tag) {
  return document.getElementById(tag);
}

let getData = JSON.parse(localStorage.getItem("product"));
console.log(getData);

getById("name").innerText = getData.description;
getById(
  "img"
).innerHTML = `<img class="productImage" id="img" src="${getData.image}" alt="">`;
getById("price").innerText = "₹" + getData.price;

window.addEventListener("load", function () {
  let add_to_cart = getById("add_to_cart");
  add_to_cart.onclick = () => {
    alert("added to cart");
    let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
    cart_items.push(getData);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
  };
  let add_to_buy = getById("add_to_buy");
  add_to_buy.onclick = () => {
    alert("succesfully placed");
  };
});
/*
add_to_cart
add_to_buy
*/
