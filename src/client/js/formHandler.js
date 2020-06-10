let apiResponse = { };

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
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




export { handleSubmit }
export { sendFormText }
export { apiResponse }