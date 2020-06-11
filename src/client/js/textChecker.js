function checkForInput(formText) {
    // Check is the entry text is valid

    if(typeof formText == "string" && formText.length > 2) {
        return true;
    } else {
        Client.showError();
        return false; 
    }
}

//Shows the error message when the input text is not valid
function showError(){
    const results = document.getElementById('results');
    results.innerHTML = '';
    const pError = document.createElement("p");
    pError.innerHTML = ("You must enter a valid text to analyze")
    results.appendChild(pError);

}



export { checkForInput }
export { showError }