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
        link.addEventListener("click",
        function(ev){
            ev.preventDefault();
            let content = document.querySelector('.content')
                content.classList.remove("fadeInDown");
                content.classList.remove("animated");

                content.classList.add("fadeOutUp");
                content.classList.add("animated");

                setTimeout(function(){
                    location.href = "/";
                },1000);
                
            return false;
        })    
    }
);

/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star"); 

})*/