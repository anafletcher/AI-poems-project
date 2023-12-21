function displayPoem(response) {
  let generatedPoem = response.data.answer;
  let typewriter = new Typewriter("#poem", {
    cursor: null,
    delay: 30,
  });

  typewriter.typeString(generatedPoem).start();
}

function generatePoem(event) {
  event.preventDefault();

  let themeInputElement = document.querySelector("#theme-input");

  let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
  let context =
    "You are a poem expert and are great at writing short poems. You must generate a 4-line poem in basic HTML and separate each line with <br/>. do not include a title and sign the poem with '- AI Poem Bot' in <strong> at the end of the poem";
  let prompt = `Generate a 4-line poem about ${themeInputElement.value}. make sure the poem is 4 lines long`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="pulsing"><em>⏳ Generating a "${themeInputElement.value}" poem for you...</em></div>`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
