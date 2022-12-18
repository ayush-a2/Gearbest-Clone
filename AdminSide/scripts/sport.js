import {admin_navbar} from '../components/admin_navbar.js'
let navbar = document.getElementById('navbar');
navbar.innerHTML = admin_navbar();


async function getData(){
    let res= await fetch(' http://localhost:3000/Sports')
    res=await res.json();
    display(res);
    }
    getData()
    let display=(data)=>{
    let box=document.getElementById('right')
    box.innerHTML=null;
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
    let remove =async(id)=>{
        await fetch( `http://localhost:3000/Sports/${id}`,{
            method:"DELETE"
    
        })
    
    }
    let update=async(id)=>{
        let upd_price=window.prompt("HERE YOU CAN UPDATE PRICE?")
        let obj={
            price:upd_price
        }
        await fetch( `http://localhost:3000/Sports/${id}`,{
            method:"PATCH",
              
            body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
        })
    }