boton = document.querySelector(".hamburger");
mobile = document.querySelector(".div_mobile")

boton_basico = document.querySelectorAll(".boton_basico")
center_div_basico = document.querySelector(".pago_basico")
quit_basico = document.querySelector(".quit_basico")

boton_medio = document.querySelectorAll(".boton_medio")
center_div_medio = document.querySelector(".pago_medio")
quit_medio = document.querySelector(".quit_medio")

boton_avanzado = document.querySelectorAll(".boton_avanzado")
center_div_avanzado = document.querySelector(".pago_avanzado")
quit_avanzado = document.querySelector(".quit_avanzado")


boton.addEventListener("click",()=>{
    mobile.classList.toggle("div_mobiledespleged")

})


//botones de cartas
boton_basico.forEach(element => {
    element.addEventListener("click",()=>{
        center_div_basico.classList.toggle("pago_basico_active");
    })
});

boton_medio.forEach(element => {
    element.addEventListener("click",()=>{
        center_div_medio.classList.toggle("pago_medio_active");
    })
});

boton_avanzado.forEach(element => {
    element.addEventListener("click",()=>{
        center_div_avanzado.classList.toggle("pago_avanzado_active");
    })
});


quit_basico.addEventListener("click",()=>{
    center_div_basico.classList.toggle("pago_basico_active");
})


quit_medio.addEventListener("click",()=>{
    center_div_medio.classList.toggle("pago_medio_active");
})


quit_avanzado.addEventListener("click",()=>{
    center_div_avanzado.classList.toggle("pago_avanzado_active");
})