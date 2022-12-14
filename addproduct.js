let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];

localStorage.setItem("cart_items", JSON.stringify(cart_items)); 


let btn_addProduct = document.getElementById("addProduct");
btn_addProduct.addEventListener("click", (e) => {
    e.preventDefault()

    let form = document.getElementById("prod_form");

    let name = form.name;
    let brand = form.brand;
    let location = form.location;
    let image = form.image;
    let store = form.store;
    let price = form.price;
    let model = form.model;


    let obj = {
        name: name.value,
        brand: brand.value,
        location: location.value,
        image: image.value,
        store: store.value,
        price: price.value,
        model: model.value,
    }

    cart_items.push(obj);

     localStorage.setItem("cart_items", JSON.stringify(cart_items)); 

    form.reset();
})