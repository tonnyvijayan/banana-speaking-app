/**declaring variables which will do input,processing,output & adding query selector */
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");
var buttonClick = document.querySelector("#btn-translate");

/**api server url */
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

/**making the api query url  */
function makeQueryUrl(text) {
    return serverUrl + "?" + "text=" + text;

};

/**error handling message */
function errorHandler(error) {
    console.log("Error occured", error);
    alert("Error encountere please try after sometime")
};

/**making the function which will trigger when clicked */
function clickHandler() {
    var txtInputValue = txtInput.value;

    fetch(makeQueryUrl(txtInputValue))
        .then(respone => respone.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText
        })
        .catch(errorHandler)    /**error handling */
};




/**adding event listener to the button and calling the function */
buttonClick.addEventListener("click", clickHandler);