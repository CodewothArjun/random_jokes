// const url = "https://official-joke-api.appspot.com/jokes/random";
const url = "https://v2.jokeapi.dev/joke/Any";
const display1 = document.querySelector("#jokesDisplaySet");
const display2 = document.querySelector("#jokesDisplayPun");
const displayError = document.querySelector("#Error");

async function generateJokes() {
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      throw new Error("Requested: " + res.error);
    }
    const data = await res.json();
    console.log(data);

    display1.innerText = data.setup;
    display2.innerText = data.delivery;
  } catch (error) {
    console.log("Having Somethig Wrong!!!");
    displayError.innerText = "Something went wrong !!";
  }
}
