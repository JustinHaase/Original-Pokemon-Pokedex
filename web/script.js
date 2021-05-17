//on scroll sticky header function
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//music on click function
var music = document.getElementById('music');

function playAudio() {
	if (music.paused){
		music.play();
		pButton.className = "";
		pButton.className = "pause";
	} else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
	}
}


//Search
// function mySearch() {
//   var input, filter, div, h3, a, i, txtValue;
//   input = document.getElementById("poke_container");
//   filter = input.value.toUpperCase();
//   div = document.getElementsByClassName("pokemon");
//   h3 = ul.getElementsByClassName("name");
//   for (i = 0; i < h3.length; i++) {
//       a = h3[i].getElementsByClassName("name")[0];
//       txtValue = name.textContent || name.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           li[i].style.display = "";
//       } else {
//           li[i].style.display = "none";
//       }
//   }
// }


//Big Pokemon Card on click function
document.getElementById("poke_container").onclick = function () {
  var div = document.createElement('bigcard');
  var div2 = document.createElement('bigcardface');
  div.setAttribute("id", "bigcard");
  div.style.backgroundColor = "red";
  div.style.margin = "auto";
  div.style.position ="absolute";
  // div.style.display = "flex";
  div.style.left= "0, auto";
  div.style.top= "250px";
  div.style.height= "650px";
  div.style.width= "450px";
  div2.setAttribute("id", "bigcardface");
  div2.style.backgroundColor = "red";
  div2.style.margin = "auto";
  div2.style.position ="absolute";
  // div.style.display = "flex";
  div2.style.left= "0, auto";
  div2.style.top= "250px";
  div2.style.height= "600px";
  div2.style.width= "400px";

  document.getElementsByTagName('body') [0].appendChild(div);

}



//Big Pokemon Card remove on click function



const poke_container =
document.getElementById('poke_container');
const pokemon_number = 151;
// const colors = {
// 	fire: '#FDDFDF',
// 	grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#FRE7DA',
// 	rock: '#D5D5D4',
// 	fairy: '#FCEAFF',
// 	poison: '#98D7A5',
// 	bug: '#F8D7A3',
// 	dragon: '#97B3E6',
// 	psychic: '#EAEDA1',
// 	flying: '#F5F5F5',
// 	fighting: '#E6E0D4',
// 	normal: '#F5F5F5',
// };

const colors = { //used (colorlib.com/etc/color-mixer.html) for combinations
fire: '#fd7d25',
grass: '#9bcc50',
electric: '#eed534',
water: '#4591c4',
ground: '#CFB73F', //a combination of '#f7df3f' and '#ab9842'
rock: '#a38c22',
fairy: '#fdb8e9',
poison: '#b97ec8',
bug: '#72a03f',
dragon: '#AA828C', //a combination of '#52a3ce' and '#f16e57'
psychic: '#f366b9',
flying: '#7CBED4', //a combination of '#3dc7ef' and '#bdb9b6'
fighting: '#d56722',
normal: '#a4acaf',
ghost: '#7c63a3',
ice: '#52c5e7',
steel: '#9eb7b8',
};

// const colors = {
//   fire: '#fd7d25',
//   grass: '#9bcc50',
//   electric: '#eed534',
//   water: '#4591c4',
//   ground: '#f7df3f','#ab9842', (#CFB73F)
//   rock: '#a38c22',
//   fairy: '#fdb8e9',
//   poison: '#b97ec8',
//   bug: '#72a03f',
//   dragon: '#52a3ce','#f16e57', (#AA828C)
//   psychic: '#f366b9',
//   flying: '#3dc7ef','#bdb9b6', (#7CBED4)
//   fighting: '#d56722',
//   normal: '#a4acaf',
//   };
  
const main_types = Object.keys(colors);




const fetchPokemon = async() => {
  for(let i=1; i<=pokemon_number; i++){
      await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  
  pokemonEl.classList.add('pokemon');
  
  const typeA = pokemon.types[0].type.name;
  let typeB = "";
  if (pokemon.types.length > 1) {
    typeB = pokemon.types[1].type.name;
    pokemonEl.style.background = "conic-gradient(" + colors[typeB] + "," + colors[typeA] + ")";
  }else{
    typeB = "";
    pokemonEl.style.background = colors[typeA];
  }
  const name = pokemon.name[0].toUpperCase() +
        pokemon.name.slice(1);
  
  
  const pokeInnerHTML = `
  <span id= "id" class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
  <h3 class="name">${name}</h3>
  <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
  </div>
  <div class="infoType">
  <div class="typeA">Type: ${typeA}</div>
  <div class="typeB">${typeB}</div>
  </div>
  `;
  
  pokemonEl.innerHTML = pokeInnerHTML;
  
  poke_container.appendChild(pokemonEl);

  
}

// let toSort = document.getElementById('id');

// toSort = Array.prototype.slice.call(toSort, 0);
let number = 
console.log (number);

// toSort.sort(function(a, b) {

// });

// let parent = document.getElementsByClassName('poke_container');
// parent.innerHTML = "";

// for(var i = 0, l = toSort.length; i < l; i++) {
//     parent.appendChild(toSort[i]);
// }


// function changeTheDisplay(pokemonEl) {
//   content = document.querySelectorAll('.poke-container');
//   content.forEach(row => pokemonEl.innerHTML = '');
//   display(pokemonEl);
// };

// //SORT--- Pokemon by ID

// //lowest to highest ID number
// idUp = document.getElementById('idUp');
// idUp.addEventListener('click', () => sortByAscendingId());

// function sortByAscendingId() {
//   pokemonEl.sort((a, b) => a.id - b.id);
//   changeTheDisplay(pokemonEl);
// };
// //heighest to lowest ID number
// idDown = document.getElementById('idDown');
// idDown.addEventListener('click', () => sortByDescendingId());

// function sortByDescendingId() {
//   pokemonEl.sort((a, b) => b.id - a.id);
//   changeTheDisplay(pokemonEl);
// };

//SORT--- Pokemon by Name
//A - Z
// nameUp = document.getElementById('nameUp');
// nameUp.addEventListener('click', () => sortByAscendingName());

// function sortByAscendingName() {
//   pokemon.sort((a, b) => a.name.english < b.name.english ? -1 : 1);
//   changeTheDisplay(pokemon);
// };
//Z - A
// nameDown = document.getElementById('nameDown');
// nameDown.addEventListener('click', () => sortByDescendingName());

// function sortByDescendingName() {
//   pokemon.sort((a, b) => a.name.english < b.name.english ? -1 : 1);
//   pokemon.reverse();
//   changeTheDisplay(pokemon);
// };




// // create an XHR object
// let pokedex = document.getElementById("pokedex");

// //Type Mapping - how does this really work?
// let typeMapping = {
//   electric: "#cc9900",
//   grass: "#5cb737",
// };

// const xhr = new XMLHttpRequest();

// // listen for `onload` event
// xhr.onload = () => {
//   // process response
//   if (xhr.status == 200) {
//     // parse JSON data
//     let pokemonDatas = JSON.parse(xhr.response);
//       console.log(pokemonDatas);
//     displayPokemon(pokemonDatas);
//   } else {
//     console.error("Error!");
//   }
// };

// // create a `GET` request
// xhr.open("GET", "http://localhost:7000/pokemon/all/");

// // send request
// xhr.send();


// //Function to dynamically create and display pokemon cards
// const displayPokemon = (pokemon) => {
//     //console.log("In displayPokemon");
//     //console.log(pokeman[0].type.split(",")[0]);
//     //console.log(typeof pokemon[0].type);
//   const pokemonHTMLString = pokemon
//     .map(
//       (pokeman) => `
//    <li class="card" style="background-color: ${colorPokemon(
//      pokeman.type.split(",") [0] + [1]
//    )}">
//       <h2 class="card-header"><span class="left">${
//         pokeman.name
//       }</span> <span class="right">#${pokeman.id < 100 ? "0"+pokeman.id :
//         pokeman.id 
//       } </span></h2>
//       <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
//       <p>Type: ${pokeman.type.split(",")[0]}</p>
       
//    </li>
//   `
//     )
//     .join("");

//   pokedex.innerHTML = pokemonHTMLString;
  
// };

// //This function retuns a color based on pokemon type
// function colorPokemon(pokemon) {
//   console.log("In colorPokemon: " + pokemon);
//   console.log("Pokemon length" + pokemon.length);
//   let pcolor = "";
  
//   //Set the card color based on the pokemon type
//   if (pokemon === "electric") pcolor = "#cc9900";
//   if (pokemon === "grass") pcolor = "#DEFDE0";
//   if (pokemon === "poison") pcolor = "#DEFDE0";
//   if (pokemon === "fire") pcolor = "#FDDFDF";
//   if (pokemon === "water") pcolor = "#DEF3FD";
//   if (pokemon === "flying") pcolor = "#F5F5F5";
//   if (pokemon === "bug") pcolor = "#83901a";
//   if (pokemon === "normal") pcolor = "#797964";
//   if (pokemon === "ground") pcolor = "#bf9926";
//   if (pokemon === "fairy") pcolor = "#bf9926";
//   if (pokemon === "fighting") pcolor = "#bf9926";
//   if (pokemon === "psychic") pcolor = "#bf9926";
//   if (pokemon === "rock") pcolor = "#bf9926";
//   if (pokemon === "steel") pcolor = "#bf9926";
//   if (pokemon === "ice") pcolor = "#00aaff";
//   if (pokemon === "ghost") pcolor = "#5454b3";
//   if (pokemon === "dragon") pcolor = "#4e38e9";
//   if (pokemon === "dark") pcolor = "#573e31";

//   return pcolor;
// }

/* <img class="card-image" src="${pokeman.image}"/> */