import { navbar } from "./components/navbar.js";
import { footer } from "./Footer/footer.js";
document.getElementById("footer").innerHTML=footer();

document.getElementById("navbar").innerHTML=navbar();

let cart_items = JSON.parse(localStorage.getItem("cart_items"));

let sum = 0

for(var i=0;i<cart_items.length;i++){
  sum+= +cart_items[i].price
}

document.getElementById("total_bill").innerText= sum;
document.getElementById("final_total_bill").innerText= sum;



const item_cart = (data) => {

    let container = document.getElementById("cart_item");

    container.innerHTML = null

    let quat = 1

    let table = document.createElement("table");
    
    table.innerHTML = null

    data.forEach((el) =>{
        // let row_store = document.createElement("tr");
        // row_store.id = "row_store";
        // row_store.innerHTML = el.store;


        let row_details = document.createElement("tr");
        row_details.id = "item_detail"

          // image 
            let td_image = document.createElement("img");
            td_image.src = el.image;
            td_image.className = "imgg";

          // information of the product

          let td_detail = document.createElement("td");

              let div = document.createElement("div");
              div.id = "td_info"

                let name = document.createElement("h3");
                name.innerHTML = el.name;
                name.className = "item_name";

                // let brand = document.createElement("p");
                // brand.innerHTML = `Brand: ${el.brand}`;

                // let location = document.createElement("p");
                // location.innerHTML = `Shiping from: ${el.location}`;

                // let model = document.createElement("p");
                // model.innerHTML = el.model;

              div.append(name);
              td_detail.append(div);
              
           row_details.append(td_detail)

        // price of the product

        let td_price = document.createElement("td");
        let price = document.createElement("h3")
        price.innerHTML = el.price;
        let sub_total = el.price
        td_price.append(price);


        // add same product to the 

        let td_chng = document.createElement("td");

            let chng_div = document.createElement("div");
            chng_div.id = "chng_btn";

              let sub_btn = document.createElement("button");
              sub_btn.innerHTML = "-"
              sub_btn.addEventListener("click", () => {
                  if(sub_total==el.price){
                    sub_btn.style = "disabled";
                  }else{
                    quat-= 1
                    chng_btn.innerHTML = quat
                    sub_total -= el.price
                    total.innerHTML = sub_total;
                    td_total.append(total);
                   
                  }
            })
      
              let chng_btn = document.createElement("button");
              chng_btn.innerHTML = quat
      
              let add_btn = document.createElement("button");
              add_btn.innerHTML = "+"
              add_btn.addEventListener("click", () => {
                  quat+= 1
                  chng_btn.innerHTML = quat
                  sub_total = el.price*quat
                  total.innerHTML = sub_total;
                  td_total.append(total);

              })
      
            chng_div.append(sub_btn, chng_btn, add_btn);
        
        td_chng.append(chng_div)
        
        // subtotal of the product 

          let td_total = document.createElement("td");
            let total = document.createElement("h3");
            total.innerHTML = sub_total;
          td_total.append(total);

         
        // operation buttons 
            let td_operations = document.createElement("td");

                let opertion_btn = document.createElement("div");

                  let edit = document.createElement("h3");
                  edit.innerHTML = "Edit";

                  let add_fav = document.createElement("h3");
                  add_fav.innerHTML = "Favorites";

                  let delete_btn = document.createElement("h3");
                  delete_btn.innerHTML = "Delete";
                  delete_btn.addEventListener("click", () =>{
                    e.target.parentNode.remove();
                  })

                opertion_btn.append(edit, add_fav, delete_btn);

                td_operations.append(opertion_btn);

        row_details.append(td_image, div, td_price, td_chng, td_total, td_operations)

        table.append( row_details);

        //div.append(image, name, brand, location, store, model, price, chng_div);

        container.append(table);


    })   
}


    if(cart_items.length>0){
      item_cart(cart_items);

    }else{
      let bill = document.getElementById("bill")
      bill.style.display = "none"

      let payoptions = document.getElementById("payoptions")
      payoptions.style.display = "none"
    }


    let check_btn = document.getElementById("check_btn");
    check_btn.onclick = () => {
      window.location.href = "./newcheckout.html"
    }


    let shop_btn = document.getElementById("shop");
    shop_btn.onclick = () => {
      window.location.href = "./index.html";
    }