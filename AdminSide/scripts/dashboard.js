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
async function getData(){
let res= await fetch(' http://localhost:3000/consumer')
res=await res.json();
display(res);
}
getData()
let display=(data)=>{
let box=document.getElementById('right')
    data.forEach(el => {
        let div=document.createElement('div')
        let image=document.createElement('img');
        image.src=el.image
        let price=document.createElement('h4')
        price.innerText=`Price ${el.price}`;
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
    let obj={
        price:upd_price
    }
    await fetch( `http://localhost:3000/${cat}/${id}`,{
        method:"PATCH",
          
        body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
    })
}