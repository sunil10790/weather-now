const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=cc87dbaebf12b096a1faabe9847e7d94&query=12.9716,77.5946&units=m"

request({ url: url, json: true}, (error, response) => {
    const currentData = response.body.current;
    console.log(currentData.weather_descriptions[0] + '. It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out.')
})