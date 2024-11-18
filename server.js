const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Setup empty JS object to act as endpoint for all routes
projectData = {
    "key": "I am some JSON response"
};

// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.get('/data', (req, res) => {
    res.json(projectData)
})

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000
app.listen(port, () => {
    console.log('server is running')
})


// Setup Server