import { navbar } from "./components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {footer} from "./Footer/footer.js";
const footer_id = document.getElementById("footer_id");
footer_id.innerHTML = footer();




let data=JSON.parse(localStorage.getItem("total"))
console.log(data);
document.getElementById("price").innerText = `${ + data}`;
document.getElementById("pric").innerText = `${data}`;

let saveBtn = document.getElementById("saveBtn");

//save details

saveBtn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname == "" || number == "" || address == "") {
    alert("Fill Details");
  } else {
    let obj = {
      fname,
      lname,
      number,
      address,
      price,
  
    
     
    }
console.log(obj);
  }
    alert("Your Details is saved");
    alert("Please choose payment option");
  }

// let Input_Data=100;

let payCashBtn = document.getElementById("payCashBtn");
payCashBtn.style.cursor = "pointer";

const payOnlineBtn = document.getElementById("payOnlineBtn");
payOnlineBtn.style.cursor = "pointer";
payOnlineBtn.onclick = () => {
  // getDataFromStorage();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname === "" || address == "" || number == "") {
    alert("Please fill the details");
  }
  //  else if (Input_Data == null) {
  //   alert("Please Save Details First");
  // } 
  else {
    location.href = "./payment.html";
  }
};

payCashBtn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname === "" || address == "" || number == "") {
    alert("Please fill the details");
  } 
  // else if (Input_Data == null) {
  //   alert("Please Save Details First");
  // } 
  else {
    alert("OTP is sent on Number");
    let input_Otp = prompt("Enter otp");
    if (input_Otp != null) {
      if (input_Otp == "12345") {
        alert("Your order is placed");
        customer_detail();
        localStorage.removeItem("shipping_details");
      } else {
        alert("Worng otp");
      }
    }
  }
};

if (data != 0) {
  document.getElementById("actual").innerText =   data.price;
}
let apply_btn = document.getElementById("apl");

apply_btn.onclick = async () => {

  discount();
};


const discount = () => {
  let promo_code = document.getElementById("promo").value;

  if (promo_code == "masai30") {
    document.getElementById("dscnt").innerText = `${Math.round(
      (data * 30) / 100
    )}`;

    document.getElementById("actual").innerText = `${Math.round(
      (data * 70) / 100
    )}`;
  } else if (promo_code == "") {
    alert("Please enter Promo code");
  } else if (promo_code == "masai20") {
    document.getElementById("dscnt").innerText =
       + Math.round((data * 20) / 100);
    document.getElementById("actual").innerText =
      + Math.round((data * 80) / 100);
  } else {
    alert("Code is not eligible");
  }
};


document.getElementById("actual").innerText = data;
    