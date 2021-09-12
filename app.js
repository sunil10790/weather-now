const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=cc87dbaebf12b096a1faabe9847e7d94&query=12.9716,77.5946"

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})