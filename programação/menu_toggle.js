function clickMenu() {
    const menuLista = document.querySelector("#menuLista")
    menuLista.classList.toggle("ocultado")
}
function solucoesDropDown() {
    const menuDropdown = document.querySelector("#solucoesDropDown")
    const chevronRight = document.querySelector("#escondeDropDown__solucoes-chevron-right")
    menuDropdown.classList.toggle("escondeDropDown")
    chevronRight.classList.toggle("escondeDropDown__solucoes-chevron-right-actived")
}
let controlador = 0
function casesDropDown() {
    const menuDropdown = document.querySelector("#casesDropDown")
    const chevronRight = document.querySelector("#escondeDropDown__cases-chevron-right")
    menuDropdown.classList.toggle("escondeDropDown")
    if(controlador == 0){
        chevronRight.style.transform = `rotate(${90}deg)`
        controlador = 1
    }else{
        chevronRight.style.transform = `rotate(${0}deg)`
        controlador = 0
    }
}