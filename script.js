function actualizarReloj(){
    const ahora = new Date();
    document.getElementById("reloj").innerHTML = "Fecha y hora: " + ahora.toLocaleString();
}
setInterval(actualizarReloj,1000);
actualizarReloj();

/* loader */
window.addEventListener("load",()=>{
    setTimeout(()=>{
        const loader = document.getElementById("loader");
        if(loader) loader.style.display="none";
    },3000);
});

/* cursor */
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove",e=>{
    if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

/* typing */
const texto = "Sitio web académico interactivo basado en la exposición del Grupo 2";
let i = 0;
function escribirTexto(){
    const target = document.getElementById("typing");
    if(target && i < texto.length){
        target.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto,45);
    }
}
escribirTexto();

/* contadores */
const counters = document.querySelectorAll(".contador");
counters.forEach(counter=>{
    const updateCounter = ()=>{
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 100;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,25);
        }else{
            counter.innerText = target;
        }
    };
    updateCounter();
});

/* reveal sections */
const reveals = document.querySelectorAll(".glass");

reveals.forEach(sec=>{
    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "all 1s ease";
});

function mostrarSecciones(){
    const trigger = window.innerHeight / 1.12;

    reveals.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;

        if(top < trigger){
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll",mostrarSecciones);
mostrarSecciones();