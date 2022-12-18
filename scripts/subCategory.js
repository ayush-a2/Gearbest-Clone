/*
ids 
low_to_high
high_to_low
product_type_category
append_container

class
image
disc_of_product
*/
import { navbar } from "../components/navbar.js";
import { footer } from "../Footer/footer.js";
document.getElementById("footer").innerHTML=footer();

document.getElementById("navbar").innerHTML=navbar();

let phone_url = "http://localhost:3000/Phones";

async function fetchReq() {
  try {
    let res = await fetch(phone_url);
    let data = await res.json();
    console.log(data);
    renderCategory(data)

    renderDom(data);
  } catch (error) {
    console.log("Bad request");
  }
}
fetchReq();

/*


  // container.innerHTML = all_cards.join(' ');

let all_cards = data.map((el) => {
    return `<div class="card" data-id="${el.id}"><img src="${el.image}" alt="" class="image"><p class="disc_of_product">${el.description}</p><p class="prize_of_product">${"₹"+el.price}</p><p class="prize_of_product">${el.stars}</p></div>`
  });

  // container.innerHTML = all_cards.join(' ');
  

*/
function renderDom(data) {
  let container = getById("append_container");
  container.innerHTML = "";
  data.forEach((el,i) => {
    let div = createElement("div");
    div.className="card";
    let image = createElement("img");
    image.className="image";
    image.src=el.image;
    image.onclick=()=>{
      gotoDetails(el)
    }

    let title = createElement("p");
    title.className="disc_of_product";
    title.innerText=el.description;
    title.onclick=()=>{
      gotoDetails(el)
    }
    
    let price = createElement("p");
    price.className="prize_of_product";
    price.innerText="₹"+el.price;
    price.onclick=()=>{
      gotoDetails(el)
    }
    
    let rate = createElement("p");
    rate.className="prize_of_product";
    rate.innerText=el.stars;

    div.append(image,title,price,rate);
    container.append(div);
  });
  
}

function gotoDetails(el){
  localStorage.setItem("product",JSON.stringify(el));
console.log(el);
}


function createElement(tag){
  return document.createElement(tag)
}
function renderCategory(data){
    let value = data[0].category;
    let appenTitle = getById("product_type_category");
    appenTitle.innerText=value;
}



function getById(tag) {
  return document.getElementById(tag);
}

function reidirectedToDetailsPage(){
    // window.location.href="";
    console.log("reidirectedToDetailsPage");
}

window.addEventListener("load", function () {
  let lowThigh = getById("low_to_high");
  lowThigh.onclick = function () {
    console.log(lowThigh.value);
  };
  let highTlow = getById("high_to_low");
  highTlow.onclick = function () {
    console.log(highTlow.value);
  };
 

});
