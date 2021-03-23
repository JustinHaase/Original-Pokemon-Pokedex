// create an XHR object
let pokedex = document.getElementById("pokedex");

//Type Mapping - how does this really work?
let typeMapping = {
  electric: "#cc9900",
  grass: "#5cb737",
};

const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
  // process response
  if (xhr.status == 200) {
    // parse JSON data
    let pokemonDatas = JSON.parse(xhr.response);
      console.log(pokemonDatas);
    displayPokemon(pokemonDatas);
  } else {
    console.error("Error!");
  }
};

// create a `GET` request
xhr.open("GET", "http://localhost:4000/pokemon/all/");

// send request
xhr.send();


//Function to dynamically create and display pokemon cards
const displayPokemon = (pokemon) => {
    //console.log("In displayPokemon");
    //console.log(pokeman[0].type.split(",")[0]);
    //console.log(typeof pokemon[0].type);
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
   <li class="card" style="background-color: ${colorPokemon(
     pokeman.type.split(",")[0]
   )}">
      <h2 class="card-header"><span class="left">${
        pokeman.name
      }</span> <span class="right">#${pokeman.id < 100 ? "0"+pokeman.id :
        pokeman.id 
      } </span></h2>
      <img class="card-image" src="${pokeman.image}"/>
      <p >Type: ${pokeman.type.split(",")[0]}</p>
       
   </li>
  `
    )
    .join("");

  pokedex.innerHTML = pokemonHTMLString;
  
};

//This function retuns a color based on pokemon type
function colorPokemon(pokemon) {
  console.log("In colorPokemon: " + pokemon);
  console.log("Pokemon length" + pokemon.length);
  let pcolor = "";
  
  //Set the card color based on the pokemon type
  if (pokemon === "electric") pcolor = "#cc9900";
  if (pokemon === "grass") pcolor = "#5cb737";
  if (pokemon === "poison") pcolor = "#88447a";
  if (pokemon === "fire") pcolor = "#d52100";
  if (pokemon === "water") pcolor = "#0080ff";
  if (pokemon === "flying") pcolor = "#556dff";
  if (pokemon === "bug") pcolor = "#83901a";
  if (pokemon === "normal") pcolor = "#797964";
  if (pokemon === "ground") pcolor = "#bf9926";
  if (pokemon === "fairy") pcolor = "#bf9926";
  if (pokemon === "fighting") pcolor = "#bf9926";
  if (pokemon === "psychic") pcolor = "#bf9926";
  if (pokemon === "rock") pcolor = "#bf9926";
  if (pokemon === "steel") pcolor = "#bf9926";
  if (pokemon === "ice") pcolor = "#00aaff";
  if (pokemon === "ghost") pcolor = "#5454b3";
  if (pokemon === "dragon") pcolor = "#4e38e9";
  if (pokemon === "dark") pcolor = "#573e31";

  return pcolor;
}