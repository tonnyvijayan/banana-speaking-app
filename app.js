const txtInput = document.querySelector("#txt-input");
const txtOutput = document.querySelector("#output");
const buttonClick = document.querySelector("#btn-translate");

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

function makeQueryUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("Error encountere please try after sometime");
}

function clickHandler() {
  const txtInputValue = txtInput.value;

  fetch(makeQueryUrl(txtInputValue))
    .then((respone) => respone.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      txtOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

buttonClick.addEventListener("click", clickHandler);
