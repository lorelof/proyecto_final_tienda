export {traerProductos, crearCards, imprimirDetalle};
// import { mostrarDetail } from "./detail.js";

const containerCard=document.getElementById('container');
const containerDetail=document.getElementById('containerDetail');

async function traerProductos(){
    fetch('js/data.json')        
            .then((res)=>res.json())
            .then((products)=>crearCards(products));
    // const resp = await fetch('/js/data.json');
    // const data = await resp.json();
    // crearCards(data);
}
traerProductos();

const crearCards = function (products) {
    console.log(products);
    for (let i=0; i<10; i++){
            const nombre = document.createElement("h3")
            const imagen = document.createElement("img")
            const precio = document.createElement("h4")
            const card = document.createElement("article")
            const btnDetail=document.createElement('button')
            nombre.innerHTML = products[i].title
            imagen.src = products[i].image
            precio.innerHTML = products[i].price
            btnDetail.innerHTML = "Ver detalle"
            btnDetail.classList.add("btnDetail")
            btnDetail.addEventListener("click", ()=>{
            console.log(products[i]);
            alert("here")
        
            imprimirDetalle(products[i]);
        })    
        card.append(nombre, imagen, precio, btnDetail);           
        containerCard.appendChild(card)
    }
}
const imprimirDetalle = function (products){
    //objeto vacio
    console.log(products);
    //undefined
    console.log(products.title);
    //el window location rompe. Pero no salen errores!!
    window.location.assign("http://127.0.0.1:5500//pages/detail.html");
        const nombre = document.createElement("h3")
        const imagen = document.createElement("img")
        const precio = document.createElement("h4")
        const cardDet = document.createElement("article")
        const btnBuy=document.createElement('button')
        nombre.innerHTML = products.title
        imagen.src = products.image
        precio.innerHTML = products.price
        btnBuy.innerHTML = "Comprar"
        btnBuy.classList.add("btnBuy");
        btnBuy.addEventListener("click", ()=>{
                alert("compré?????")
            cardDet.append(nombre, imagen, precio, btnBuy); 
            containerDetail.append(cardDet);
        });
    }
    


    // fetch('js/data.json')        
        // .then((res)=>res.json())
        // .then((products)=>crearCards(products));
        //crearCards para q muestre los productos, 
        //recorrerlo con un for
        // const data = res.json();

