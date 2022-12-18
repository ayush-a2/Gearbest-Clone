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
<div class="card">
     <img src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16669/goods_thumb_220-v1/146b80fcd97e.jpg" alt="" class="image">
     <p class="disc_of_product">
         Tronxy 3D Printer XY-2 PRO 2E Upgrade High Precision Dual
     </p>
     <p class="prize_of_product">
         299.00
     </p>
     <p class="sale_type">flash sale</p>
</div>
*/
function renderDom(data) {
  let container = getById("append_container");
  container.innerHTML = "";
  let all_cards = data.map((el) => {
    return `<div class="card" data-id="${el.id}"><img src="${el.image}" alt="" class="image"><p class="disc_of_product">${el.description}</p><p class="prize_of_product">${"₹"+el.price}</p><p class="prize_of_product">${el.stars}</p></div>`
  });

  container.innerHTML = all_cards.join(' ');
}
function renderCategory(data){
    let value = data[0].category;
    let appenTitle = getById("product_type_category");
    appenTitle.innerText=value;
}



function getById(tag) {
  return document.getElementById(tag);
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
