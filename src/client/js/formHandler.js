let apiResponse = { };

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText.length);
    Client.checkForInput(formText)
      
    //convert formText to object
    const newData = { formText }
    Client.sendFormText(newData)
    .then(function(){
        Client.updateUI();
    })
    
 }
 
async function sendFormText(newData) {
    const response = await fetch( 'http://localhost:8081', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify(newData),
      });
  
        try {
          const newData = await response.json();
          console.log(newData);
          apiResponse.polarity = newData.polarity;
          apiResponse.subjectivity = newData.subjectivity;
          apiResponse.text = newData.text;
          apiResponse.polarity_confidence = newData.polarity_confidence;
          apiResponse.subjectivity_confidence = newData.subjectivity_confidence;
          return newData;
        }catch(error) {
        console.log("error", error);
        }
}

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
export { handleSubmit }
export { sendFormText }
export { apiResponse }