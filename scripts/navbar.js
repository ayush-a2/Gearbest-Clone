let search_content = getById("search_content");

let nav_links = getById("nav_links");
let rsource = "http://localhost:3000/Phones";
function burg() {
  getById("burger").addEventListener("click", () => {
    if (getById("nav_links").style.display == "block") {
      getById("nav_links").style.display = "none";
    } else {
      getById("nav_links").style.display = "block";
    }
  });
}
// ?title=json-server




let home_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let sign_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let cart_page = () => {
  // window.location.href=""
  console.log("Hii");
};
let search_button = () => {
  // window.location.href=""
  console.log("Hii");
};
let serch_inbox_fun = () => {
  let serch_term = getById("serch_inbox").value;
  if (serch_term != null || serch_term != "") {
    fetchRequest(serch_term);
    getById("search_content").innerText=serch_term;
    console.log("serch_term:", searchData);
  } else {
    return;
  }
};
let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function getById(tag) {
  return document.getElementById(tag);
}

window.addEventListener("load", function () {
  let logo_Onclick = getById("logo_click");
  logo_Onclick.onclick = () => {
    home_page();
  };
  let sign_in_btn = getById("sign_in_btn");
  sign_in_btn.onclick = () => {
    sign_page();
  };
  let search_btn = getById("search_button");
  search_btn.onclick = () => {
    search_button();
  };
  let fav_btn = getById("fav_btn");
  fav_btn.onclick = () => {};
  let cart_btn = getById("cart_btn");
  cart_btn.onclick = () => {
    cart_page();
  };
  let serch_inbox = getById("serch_inbox");
  serch_inbox.oninput = () => {
    
    debounce(serch_inbox_fun, 1000);
    // serch_inbox_fun();
  };
  serch_inbox.onfocus = () => {
    getById("search_content").style.display = "block";
  };
  serch_inbox.onblur = () => {
    getById("search_content").style.display = "none";
  };
  let burger = getById("burger");
  burger.onclick=function(){
    burg()
  }
});
/*
logo_click
sign_in_btn
fav_btn
cart_btn
serch_inbox
search_button
*/
