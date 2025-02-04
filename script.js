//Aquí irán la definición de las variables desde las que podremos acceder al html: a elementos del DOM
//para ello podremos usar querySelector(selector) o getElementById / getElementsByClassName / getElementsByTagName

const start = document.querySelector("#start");
const startForm = document.querySelector("#start-form");
const players = document.querySelector(".players");
const grid = document.querySelector("#grid");
let numberOfPlays = 0; //contador cada vez que se hace click en un botón, si es par en el grid se añadirá una cosa, si es impar otra
//Aquí añadiremos las funciones necesarias para que el juego funcione

const startGame = (e) =>{
    e && e.preventDefault();   //todos los formularios recargan la página, con esto lo evitamos, por si a caso aún que no haya un form
    startForm.classList.add('inv'); //al empezar la partida añadimos a start la clase inv para que no se muestre
    players.classList.remove('inv');
    grid.classList.remove('inv');
}

const addPiece =()=>{
    if(numberOfPlays === 0 || numberOfPlays % 2 === 0 ){
        document.querySelector(".cell").innerHTML = "⭕";
    } else  {
        document.querySelector(".cell").innerHTML = "❌";
    }

    numberOfPlays += 1;
    winnerOrLooser();
}; 

const winnerOrLooser = () =>{
    //comprobar si ha hecho 3 en raya o no, cada vez que se añadee una ficha se debe comprobar que los botones no contengan carácteres iguales alineados de cualquier forma

}







//función para resetear la partida
const reset = ()=>{
    location.reload();
};

//añadiremos aquí los addEventListeners, llaman a las funciones necesarias al interactuar con el dom

start.addEventListener('click', startGame); //cuando clickamos en start, empezará la aprtida

grid.addEventListener('click', function(event){
    if(event.target.classList.contains("cell")){
        addPiece();
    }
})