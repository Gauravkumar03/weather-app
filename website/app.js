/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log('this is server side')

function callBackend() {
    console.log('calling backend')
    // const response = await fetch('http://localhost:3000/data')
    // const data = response.json()
    // console.log(data) 
}

const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', callBackend)

