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


const poke_container =
document.getElementById('poke_container');
const pokemon_number = 151;
const pokecardBig = "pokecardBig";


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
  

const main_types = Object.keys(colors);

const fetchPokemon = async() => {
  for(let i=1; i<=pokemon_number; i++){
      await getPokemon(i);
  }
}

const getPokemon = async id => {
  const url = `http://localhost:7000/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon)
  createPokemonCard(pokemon);
}

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  
  pokemonEl.classList.add('pokemon');
  const types = pokemon.type.split(", ")
  const typeA = types[0];
  let typeB = "";
  if (types.length > 1) {
    typeB = types[1];
    pokemonEl.style.background = "conic-gradient(" + colors[typeB] + "," + colors[typeA] + ")";
  }else{
    typeB = "";
    pokemonEl.style.background = colors[typeA];
  }
  const name = pokemon.name.charAt(0).toUpperCase() +
        pokemon.name.slice(1);
  
  
  const pokeInnerHTML = `
  <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
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

//   //Big Pokemon Card on click function
// document.getElementById("poke_container").onclick = function () {
//   document.createElement('pokecardBig');



  // pokecardBig.classList.add();

//   const typeA = pokemon.types[0].type.name;
//   let typeB = "";
//   if (pokemon.types.length > 1) {
//     typeB = pokemon.types[1].type.name;
//     pokecardBig.style.background = "conic-gradient(" + colors[typeB] + "," + colors[typeA] + ")";
//   }else{
//     typeB = "";
//     pokecardBig.style.background = colors[typeA];
//   }
//   const name = pokemon.name[0].toUpperCase() +
//         pokemon.name.slice(1);

//   const pokebigInnerHTML = `
//   <span id= "id" class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
//   <h3 class="name">${name}</h3>
//   <div class="img-container">
//     <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
//   </div>
//   <div class="infoType">
//   <div class="typeA">Type: ${typeA}</div>
//   <div class="typeB">${typeB}</div>
//   </div>
//   `;

//   pokecardBig.innerHTML = pokebigInnerHTML;

//   poke_container.appendChild(pokecardBig);
// }




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



/* <img class="card-image" src="${pokeman.image}"/> */