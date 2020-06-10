
//Updates the interface to show the results from the API consult
function updateUI(){
    console.log(":::UPDATING UI:::")
    
    const resultTitle = document.getElementById('result-title');
    resultTitle.style.display = "block";

    const resultField = document.getElementById('results');
    resultField.innerHTML = '';
    //Show the "Result" text when the button is press
    
    
    
    //Create the p elements for results
    const polarity = document.createElement("p")
    polarity.innerHTML = ("Polarity: " + Client.apiResponse.polarity)
    resultField.appendChild(polarity)

    const subjectivity = document.createElement("p")
    subjectivity.innerHTML = ("Subjectivity: " + Client.apiResponse.subjectivity)
    resultField.appendChild(subjectivity)

    const confidence = document.createElement("p")
    confidence.innerHTML = ("Confidence: " + Client.apiResponse.polarity_confidence)
    resultField.appendChild(confidence)

    const subjectivity_confidence = document.createElement("p")
    subjectivity_confidence.innerHTML = ("Subjectivity confidence: " + Client.apiResponse.subjectivity_confidence)
    resultField.appendChild(subjectivity_confidence)

    console.log(":::UPDATED UI:::")
}

export { updateUI }