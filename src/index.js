function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "f3c5613898a1043cbte4a77d8c1bcfo0";
  let context =
    "You are a poem expert and are great at writing short poems. You must generate a 4-line poem in basic HTML and separate each line with <br/>. do not include a title and sign the poem with '- AI Poem Bot' in <strong> at the end of the poem";
  let prompt = `Generate a 4-line poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
