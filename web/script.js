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
//Big Pokemon Card on click function
document.getElementById("poke_container").onclick = function () {
  var div = document.createElement('bigcard');
  div.style.backgroundColor = "red";
  div.style.margin = "fixed";
  div.style.left= "0, auto";
  div.style.top= "50px";
  div.style.height= "500px";
  div.style.width= "300px";

  document.getElementsByTagName('body') [0].appendChild(div);
}

const poke_container =
document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#FRE7DA',
	rock: '#D5D5D4',
	fairy: '#FCEAFF',
	poison: '#98D7A5',
	bug: '#F8D7A3',
	dragon: '#97B3E6',
	psychic: '#EAEDA1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
};

const main_types = Object.keys(colors);
const second_types = Object.keys(colors);

console.log(main_types);

const fetchPokemons = async() => {
  for(let i=1; i<=pokemons_number; i++){
      await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
  console.log(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  
  const poke_types = pokemon.types.map(el => el.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1 );
  const name = pokemon.name[0].toUpperCase() +
        pokemon.name.slice(1);
  const color = colors[type];
  
  pokemonEl.style.backgroundColor = color;
  
  const pokeInnerHTML = `
  <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
  <h3 class="name">${name}</h3>
  <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
    
  </div>
  <div class="info">
    <small class="type">Type: <span>${type}<span></small>
  </div>
  `;
  
  pokemonEl.innerHTML = pokeInnerHTML;
  
  poke_container.appendChild(pokemonEl);
}




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