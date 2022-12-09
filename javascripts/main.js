/*
console.log("HOLA MUNDIJIRIJILLO.");


let contenedor = document.querySelectorAll("a");

contenedor.forEach(function(link){
    console.log(link);
})


let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){console.log("CLICK")})
});
- Obtener elementos de la clase .close
- Recorrerlos
- Agregar un evento click a cada uno de ellos.
*/

let links = document.querySelectorAll(".close");
links.forEach(
    function(link){
        link.addEventListener("click",function(){
            console.log("lalal");
        })    
    }
)