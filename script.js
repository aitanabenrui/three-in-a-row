//Aquí irán la definición de las variables desde las que podremos acceder al html: a elementos del DOM
//para ello podremos usar querySelector(selector) o getElementById / getElementsByClassName / getElementsByTagName

const start = document.querySelector("#start");
const startForm = document.querySelector("#start-form");
const players = document.querySelector(".players");
const grid = document.querySelector("#grid");


//Aquí añadiremos las funciones necesarias para que el juego funcione

const startGame = (e) =>{
    e && e.preventDefault();   //todos los formularios recargan la página, con esto lo evitamos, por si a caso aún que no haya un form
    startForm.classList.add('inv'); //al empezar la partida añadimos a start la clase inv para que no se muestre
    players.classList.remove('inv');
    grid.classList.remove('inv');
}






//función para resetear la partida
const reset = ()=>{
    location.reload();
};

//añadiremos aquí los addEventListeners, llaman a las funciones necesarias al interactuar con el dom

start.addEventListener('click', startGame); //cuando clickamos en start, empezará la aprtida