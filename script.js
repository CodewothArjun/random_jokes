// const url = "https://official-joke-api.appspot.com/jokes/random";
const url = "https://v2.jokeapi.dev/joke/Any";
const display1 = document.querySelector("#jokesDisplaySet");
const display2 = document.querySelector("#jokesDisplayPun");
const displayError = document.querySelector("#Error");

async function generateJokes() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Requested: " + res.error);
    }
    const data = await res.json();
    console.log(data);

    display1.innerText =  data.setup || data.category || "Unknown";// optional placeholder 'Unknown' if both setup and category  properties doesnt exist
    display2.innerText = data.delivery || data.joke; // data contain .joke property in some response
  } catch (error) {
    console.error("Having Somethig Wrong!!!"); 
    displayError.innerText = "Something went wrong !!";
  }
}