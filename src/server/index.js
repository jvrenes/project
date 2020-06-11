const dotenv = require('dotenv');
dotenv.config({ path: '../../.env'});
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')
var aylien = require("aylien_textapi");
var bodyParser = require('body-parser');



// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });



const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use(express.static('../../dist'))

console.log(__dirname)


//Global variables
let requestQuery= "";
apiResponse = { };

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('../../dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Receives data from index form
app.post('/api', processRequest);

function processRequest(req, res) {
    let newEntry = req.body;
    requestQuery = newEntry.formText;
    // callAPI(requestQuery)
    // res.send({ status: 'SUCCESS' });
    callAPI(requestQuery, res)
    }





async function callAPI(requestQuery, res) {
    textapi.sentiment({
        'text': requestQuery
      }, function(error, response) {
        console.log(response)
        if (error === null) {
          let newEntry = response;
          apiResponse.polarity = newEntry.polarity;
          apiResponse.subjectivity = newEntry.subjectivity;
          apiResponse.text = newEntry.text;
          apiResponse.polarity_confidence = newEntry.polarity_confidence;
          apiResponse.subjectivity_confidence = newEntry.subjectivity_confidence;
          console.log(apiResponse);
          res.send(apiResponse);
        } else {
          console.log(":::Api connection error:::");
        }
      })   
}