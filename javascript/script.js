//acessando DOM
let turnOff = document.querySelector("#turnOff");
let turnOn = document.querySelector("#turnOn");
let lamp = document.querySelector("#lamp");

//funcao de ligar
function lampOn() {
    lamp.src = "./imgs/ligada.jpg";
}

turnOn.addEventListener("click", lampOn);

//funcao de desligar
function lampOff() {
    lamp.src = "./imgs/desligada.jpg";
};

turnOff.addEventListener("click", lampOff);
