const express = require('express')
const app = express()
//const port = 3000
//const axios = require ('axios')
const cors = require("cors");
const port = 4000;
app.use(cors());
const fetch = require("node-fetch");
const promises = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon/all", (req, res) => {
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemonResponse = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    res.send(pokemonResponse);
  });
});


app.get("/pokemon/random", (req, res) => {
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemonResponse = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    res.send(pokemonResponse);
  });
});



app.listen(port, () => {
  console.log(`Poke app listening at http://localhost: ${port}`);
});
