import { footer } from './Footer/footer.js';
import { navbar } from './components/navbar.js';




document.getElementById("navbar").innerHTML = navbar();

let homefooter = document.getElementById('shop_footer');
homefooter.innerHTML = footer();

const getData = async () => {
    let res = await fetch('http://localhost:3000/collection');
    res = await res.json();
    console.log(res);
    collection_function(res);
}
getData();

const superdealFunction = async () => {
    let collection = await fetch(`http://localhost:3000/superdeals`);
    collection = await collection.json();
    console.log(collection);
    superdeals_function(collection)
}
superdealFunction();


const fetch_recomend_data = async () => {
    let res = await fetch('http://localhost:3000/Phones');
    res = await res.json();
    console.log(res);
    recommended(res);
}

fetch_recomend_data();

const collection_function = (data) => {
    collection.innerHTML = null;
    data.forEach(({ description, discount, category, price, id, stars, image }) => {
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'perCardDiv');

        let imag = document.createElement('img');
        imag.src = image;

        let title = document.createElement('h3');
        title.innerText = description;
        title.setAttribute('class', 'wrappingName');
        let rate = document.createElement('h4');
        rate.innerText = 'Price' + ' - ' + price + '/-';

        let disc = document.createElement('p');
        disc.innerText = discount + '%' + ' off';

        let ratings = document.createElement('p');
        ratings.innerText = stars;
        ratings.setAttribute('class', 'rating_card');

        let cartButton = document.createElement('button');
        cartButton.innerText = 'Add to Cart';
        let click = 0
        cartButton.addEventListener('click', () => {
            cartButton.innerText = 'Added to Cart';
            image_div.style.backgroundColor = '#ffe3e3';
            click++;
            cartFunction(id,description,image,price);
            console.log(click)
            if (click > 1) {
                alert('Product already added to cart');
            };
        })

        let hr = document.createElement('hr');

        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'priceDiv');
        price_div.append(rate, disc);

        let order_div = document.createElement('div');
        order_div.setAttribute('class', 'orderButton');
        order_div.append(cartButton, ratings);


        image_div.append(imag, title, hr, price_div, order_div);
        collection.append(image_div);
    });
};



const superdeals_function = (data) => {
    data.forEach(({ description, discount, category, price, id, stars, image }) => {
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'perCardDiv');

        let imag = document.createElement('img');
        imag.src = image;

        let title = document.createElement('h3');
        title.innerText = description;
        title.setAttribute('class', 'wrappingName');

        let rate = document.createElement('h4');
        rate.innerText = 'Price' + ' - ' + price + '/-';

        let disc = document.createElement('p');
        disc.innerText = discount + '%' + ' off';

        let ratings = document.createElement('p');
        ratings.innerText = stars;
        ratings.setAttribute('class', 'rating_card');
        let cartButton = document.createElement('button');
        cartButton.innerText = 'Add to Cart';
        let click = 0;
        cartButton.addEventListener('click', () => {
            cartButton.innerText = 'Added to Cart';
            image_div.style.backgroundColor = '#ffe3e3';
            click++;
            cartFunction(id,description,image,price);
            console.log(click)
            if (click > 1) {
                alert('Product already added to cart');
            };
        })
        let hr = document.createElement('hr');

        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'priceDiv');
        price_div.append(rate, disc);

        let order_div = document.createElement('div');
        order_div.setAttribute('class', 'orderButton');
        order_div.append(cartButton, ratings);


        image_div.append(imag, title, hr, price_div, order_div);
        superdeals.append(image_div);
    });

};


let rec = document.getElementById('recommended');

const recommended = (data) => {
    data.forEach(({ description, discount, category, price, id, stars, image }) => {
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'perCardDiv');

        let imag = document.createElement('img');
        imag.src = image;

        let title = document.createElement('h3');
        title.innerText = description;
        title.setAttribute('class', 'wrappingName');

        let rate = document.createElement('h4');
        rate.innerText = 'Price' + ' - ' + price + '/-';

        let disc = document.createElement('p');
        disc.innerText = discount + '%' + ' off';

        let ratings = document.createElement('p');
        ratings.innerText = stars;
        ratings.setAttribute('class', 'rating_card');
        let cartButton = document.createElement('button');
        cartButton.className="add_cart";
        cartButton.innerText = 'Add to Cart';
        let click = 0;
        cartButton.addEventListener('click', () => {
            cartButton.innerText = 'Added to Cart';
            image_div.style.backgroundColor = '#ffe3e3';
            click++;
            cartFunction(id,description,image,price);
            console.log(click)
            if (click > 1) {
                alert('Product already added to cart');
            };
        })
        let hr = document.createElement('hr');

        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'priceDiv');
        price_div.append(rate, disc);

        let order_div = document.createElement('div');
        order_div.setAttribute('class', 'orderButton');
        order_div.append(cartButton, ratings);


        image_div.append(imag, title, hr, price_div, order_div);
        rec.append(image_div);
    });
}





let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
const cartFunction = (id,description,image,price) => {
    let obj = {
        name: description,
        price: price,
        image: image,
        id: id
    }
    cart_items.push(obj);
    localStorage.setItem("cart_items", JSON.stringify(cart_items));
    console.log(obj)
}



let mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', () => {
    topFunction();
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollIntoView({
        behavior: "smooth",
    });
    document.body.scrollIntoView.behavior = "smooth";
}