function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Lightning, thunder, all around",
    autoStart: true,
    delay: 30,
    cursor: null,
  });

  let poemElement = document.querySelector("#poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
