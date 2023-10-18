import {traerProductos} from "./main.js";
import { crearCards } from "./main.js";

let cart = [];
const bigContainer = document.querySelector('.bigContainerCart');
const cardCart=document.getElementById('containerCart');
let total=document.createElement('h3');
let subtotal=0;

traerProductos('js/data.json')
    .then((products)=>crearCards(products, cardCart))

async function traerProductos(){
    const resp = await fetch('js/data.json');
    const data = await resp.json();
    crearCards(data);
}
traerProductos();

//seguir con el cart.js vinc con el cart.html








