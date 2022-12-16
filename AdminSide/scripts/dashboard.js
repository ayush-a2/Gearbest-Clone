import {admin_navbar} from '../components/admin_navbar.js'
let navbar = document.getElementById('navbar');
navbar.innerHTML = admin_navbar();


let btn=document.getElementById("product_data");

btn.onsubmit=async(e)=>{
    e.preventDefault()
    
let image=document.getElementById("image").value
let category=document.getElementById("category").value
let price=+document.getElementById("price").value;
let description=document.getElementById("descr").value;
// console.log(image,category,price);
let obj={

image,
category,
price,
description,
}
let cate=category

await fetch( `http://localhost:3000/${cate}`,{
    method:"POST",
    body:JSON.stringify(obj),
headers:{
    'Content-Type':'application/json'
}
})




document.getElementById("image").value=null
document.getElementById("category").value=null
document.getElementById("price").value=null
document.getElementById("descr").value=null
}
let page=1;
async function getData(page){
let res= await fetch(`http://localhost:3000/consumer?_page=${page}&_limit=10`)
res=await res.json();
display(res);

}
getData(page)
let display=(data)=>{
let box=document.getElementById('right')
box.innerHTML=null;
    data.forEach(el => {
        let div=document.createElement('div')
        let image=document.createElement('img');
        image.src=el.image
        let price=document.createElement('h4')
        price.innerText=`Price ${+el.price}`;
        let descr=document.createElement('h4')
        descr.innerText=el.description
        let rem_btn=document.createElement("button")
        rem_btn.innerText="Remove";
        rem_btn.onclick=(e)=>{
            e.target.parentNode.remove();
            remove(el.id,el.category)
          
        }
        let upd_btn=document.createElement("button")
        upd_btn.onclick=()=>{
            update(el.id,el.category);
        }
        upd_btn.innerText="Update";
        div.append(image,price,descr,rem_btn,upd_btn)
        box.append(div)
    });
}
let remove =async(id,cat)=>{
    await fetch( `http://localhost:3000/${cat}/${id}`,{
        method:"DELETE"

    })

}
let update=async(id,cat)=>{
    let upd_price=window.prompt("HERE YOU CAN UPDATE PRICE?")
upd_price=+upd_price
console.log (typeof upd_price);
    let obj={
        price:+upd_price
    }
    await fetch( `http://localhost:3000/${cat}/${id}`,{
        method:"PATCH",
          
        body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
    })
}

// sorting
let sort =document.getElementById("sorting")
sort.onclick=async()=>{
    console.log(sort.value);
    if(sort.value=="htl"){
let res=await fetch('http://localhost:3000/consumer?_sort=price&_order=desc')
res=await res.json();
display(res);
    }
    else if(sort.value=="lth"){
        let res=await fetch('http://localhost:3000/consumer?_sort=price&_order=asc')
        res=await res.json();
        display(res);    
    }
}

let filter=document.getElementById("filtering");
filter.onclick=async()=>{
   
    if(filter.value=="htl"){

let res=await fetch('http://localhost:3000/consumer?price_gte=100')
res=await res.json();
display(res);
    }else if(filter.value=="lth"){
        let res=await fetch('http://localhost:3000/consumer?price_lte=100')
res=await res.json();
display(res);
    }
    // else{
    //     let res=await fetch('http://localhost:3000/consumer?_sort=price&_order=asc')
    //     res=await res.json();
    //     display(res);    
    // }
}

// ?_page=7&_limit=20

// pagination

// async  function setData(page){
//     let res=await fetch(`http://localhost:3000/consumer?_page=${page}&_limit=${30}`);
//     let data =await res.json();
//     display(data.data)
// document.getElementById('sort-lth').onclick=()=>{
// data.data.sort(function(a,b){
//     return a.price-b.price
// });
// display(data.data);
// }
// document.getElementById('sort-htl').onclick=()=>{
//     data.data.sort(function(a,b){
//         return b.price-a.price
//     })
//     display(data.data);
//     }
    

// }

// setData(page);
// let count;
// let data=JSON.parse(localStorage.getItem('cart'))
// console.log(data);
// if(data ==null){
//     count=0;
// }else{
//     count=data.length;
// }


// function counting(count){
//     let cart_count=document.getElementById('cart_count')
//     cart_count.innerText=count;
// }
  
 
// counting(count);



let next=document.getElementById('next')
next.onclick=()=>{
    page++;
    getData(page);
    pages(page)
    if(page==5){
        next.disabled=true;
    }
    previous.disabled=false; 
}




let previous=document.getElementById('previous')

previous.onclick=()=>{
    page--;
    getData(page);
    pages(page)
    next.disabled=false;
    if(page==1){
        previous.disabled=true 
       
    }
}
if(page==1){
    previous.disabled=true 
   
}

let page_number=document.getElementById('page_number')
function pages(page){

    page_number.innerText=page;
}
pages(page)