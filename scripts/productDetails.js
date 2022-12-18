




function getById(tag){
    return document.getElementById(tag);
}


window.addEventListener('load',function(){
    let add_to_cart =getById("add_to_cart");
    add_to_cart.onclick=()=>{
        alert("added to cart");
    }
    let add_to_buy =getById("add_to_buy");
    add_to_buy.onclick=()=>{
        alert("succesfully placed");

    }

});
/*
add_to_cart
add_to_buy
*/