import {imprimirDetalle} from "./main.js";
import {crearCards} from "./main.js";
// export {mostrarDetail};

let prod=[];
let prodDetallado={};
imprimirDetalle(prodDetallado);




const containerDetail = document.querySelector("#containerDetail");
let total = document.createElement("h4");
let subt = 0;

// traerProductos('js/data.json')
//     .then((products)=>crearCards(products, containerDetail))


//     const mostrarDetail = function (id, products){
//         alert("md")
//         // if(id==products.id){

//         //error en products.filter
//             prodDetallados=products.filter((products)=>{
//                 id==prodDetallados;
//             })
//             console.log(prodDetallados);
        
//     alert("h")
// }