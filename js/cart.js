import {bajarProducto} from "./main.js";
// export {imprimirCart};

// let cart = [];
// const bigContainer = document.querySelector('.bigContainerCart');
// const cardCart=document.getElementById('containerCart');
// let total=document.createElement('h3');
// let subtotal=0;


let prod=bajarProducto("carrito")
imprimirCart(prod);

const imprimirCart = function (products){
    console.log(products);
    alert("printCart")
    const containerCart=document.querySelector('.containerCart');
    const cardCart = document.createElement("article")
    const nombre = document.createElement("h3")
    const imagen = document.createElement("img")
    const precio = document.createElement("h4")
    const description = document.createElement("h6");
    const btnFinish=document.createElement('button')
    nombre.innerHTML = products.title
    imagen.src = products.image
    precio.innerHTML = products.price
    description.innerHTML= products.description;
    btnFinish.innerHTML="Finalizar Compra";
    // containerCart.innerHTML+=`
    // <article class="cart" id="cart"> 
    // <h3 class="title">${products[i].title}</h3>
    // <img src="${products[i].image}" alt="${products[i].title}">
    // <h4 class="price">${products[i].price}</h4>
    // <button class="btnFinish" id="btnFinish-${products[i].id}" >Finalizar compra</button>
    // </article>
    // `    

    containerCart.append(cardCart);
}









