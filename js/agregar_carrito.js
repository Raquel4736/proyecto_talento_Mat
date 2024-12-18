document.addEventListener("DOMContentLoaded", () =>{
const botonesAgregar=document.querySelectorAll(".btn-agregar");
console.log(botonesAgregar)
botonesAgregar .forEach(boton => {
    boton.addEventListener("click", (evento) => {
        evento.preventDefault();

const nombre=boton.getAttribute("data-nombre");
    const precio=parseFloat(boton.getAttribute("data-precio"));
    const cantidad=parseInt(boton.getAttribute("data-cantidad"));
    const total=precio*cantidad;
    
    
let carrito=JSON.parse(localStorage.getItem("carrito")) || [];
carrito.push({nombre, precio, cantidad});

localStorage.setItem("carrito", JSON.stringify(carrito));
alert(`${nombre} agregado al carrito`)
    
    
});


})



})