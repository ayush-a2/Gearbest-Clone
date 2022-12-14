let c = 1, c0 = 1, c1 = 1, c2 = 1, c3 = 1, c4 = 1, c5 = 1, c6 = 1, c7 = 1;
let url = ``;

let data = [
    {
        "name": "360 LED Corridor Sill Light",
        "price": "4,999",
        "discount": "72",
        "Image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MjU4L0JsdWVfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        "category": "home&living",
        "subcategory": "Home-decore",
        "id": 1,
        "stars": "4.5/5"
    },
    {
        "name": "3D Dragon LED Night Lamp",
        "price": "6,999",
        "discount": "65",
        "stars": "4.5/5",
        "Image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MjU5L0JsdWVfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        "category": "home&living",
        "subcategory": "Home-decore",
        "id": 2
    },
    {
        "name": "American Retro Motorcyle",
        "price": "8,999",
        "discount": "64",
        "stars": "4.2/5",
        "Image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNDc5L0JsYWNrX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        "category": "home&living",
        "subcategory": "Home-decore",
        "id": 3
    },
    {
        "name": "Butterfly Girl Tray",
        "price": "4,999",
        "discount": "62",
        "stars": "4.2/5",
        "Image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMTY4L0dyZWVuX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        "category": "home&living",
        "subcategory": "Home-decore",
        "id": 4
    }
]

const carousal_data = async (c6) => {
    let res = await fetch(` http://localhost:8080/posts?category=carousal&_page=${c}&_limit=1`)

    let data = await res.json()
    console.log(data)
    // let home_decore_div =document.querySelector(".swiper-wrapper");
    let carousal_div = document.querySelector(".carousal_container")
    brandsAppend(data, carousal_div)
}
carousal_data(c6)


let id;
const carousalInterval_data = async (c) => {
    let res = await fetch(` http://localhost:8080/posts?category=carousal&_page=${c}`)

    let data = await res.json()
    console.log(data)
    // let home_decore_div =document.querySelector(".swiper-wrapper");
    let container = document.querySelector(".carousal_container")
    container.innerHTML = "";
    let image = document.createElement("img")

    image.src = data[0].Image
    container.append(image)
    let i = 1

    id = setInterval(function () {

        image.src = data[i].Image
        container.append(image)
        i++;
        if (i == data.length) {
            i = 0
        }

    }, 5000)
}
carousalInterval_data(c);


let collection = document.getElementById('collection');

const collection_function = (data) => {
    data.forEach(({ name, price, discount, id, stars, Image }) => {
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'perCardDiv');

        let imag = document.createElement('img');
        imag.src = Image;

        let title = document.createElement('h3');
        title.innerText = name;

        let rate = document.createElement('h4');
        rate.innerText = 'Price'+' - '+ price+'/-';

        let disc = document.createElement('p');
        disc.innerText = discount+'%' +' off';

        let ratings = document.createElement('p');
        ratings.innerText = stars;
        ratings.setAttribute('class', 'rating_card');

        let cartButton= document.createElement('button');
        cartButton.innerText='Add to Cart';
        let click=0
        cartButton.addEventListener('click',()=>{
            cartButton.innerText='Added to Cart';
            click++;
            cartFunction(id);
            console.log(click)
            if(click>1){
                alert('Product already added to cart');
            };
        })

        let hr=document.createElement('hr');

        let price_div=document.createElement('div');
        price_div.setAttribute('class', 'priceDiv');
        price_div.append(rate, disc);

        let order_div=document.createElement('div');
        order_div.setAttribute('class', 'orderButton');
        order_div.append(cartButton,ratings);


        image_div.append(imag, title,hr, price_div,order_div);
        collection.append(image_div);
    });
};

collection_function(data);

let superdeals=document.getElementById('superdeals');

const superdeals_function = (data) => {
    data.forEach(({ name, price, discount, id, stars, Image }) => {
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'perCardDiv');

        let imag = document.createElement('img');
        imag.src = Image;

        let title = document.createElement('h3');
        title.innerText = name;

        let rate = document.createElement('h4');
        rate.innerText = 'Price'+' - '+ price+'/-';

        let disc = document.createElement('p');
        disc.innerText = discount+'%' +' off';

        let ratings = document.createElement('p');
        ratings.innerText = stars;
        ratings.setAttribute('class', 'rating_card');
        let cartButton= document.createElement('button');
        cartButton.innerText='Add to Cart';
        let click=0;
        cartButton.addEventListener('click',()=>{
            cartButton.innerText='Added to Cart';
            click++;
            cartFunction(id);
            console.log(click)
            if(click>1){
                alert('Product already added to cart');
            };
        })
        let hr=document.createElement('hr');

        let price_div=document.createElement('div');
        price_div.setAttribute('class', 'priceDiv');
        price_div.append(rate, disc);

        let order_div=document.createElement('div');
        order_div.setAttribute('class', 'orderButton');
        order_div.append(cartButton,ratings);


        image_div.append(imag, title,hr, price_div,order_div);
        superdeals.append(image_div);
    });
};

superdeals_function(data);

let cartArr=[];
const cartFunction = (id) => {
    cartArr.push(id);
    sessionStorage.setItem('cartID', cartArr);
}
