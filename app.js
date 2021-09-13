const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=cc87dbaebf12b096a1faabe9847e7d94&query=12.9716,77.5946&units=m"
request({ url: url, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to weatherstack service!')
    } else if(response.body.error) {
        console.log('Unable to find location! Try different coordinates.')
    } else {
        const currentData = response.body.current
        console.log(currentData.weather_descriptions[0] + '. It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out.')
    }
})

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bangalore.json?access_token=pk.eyJ1Ijoic3VuaWwxMDc5MCIsImEiOiJja3RpMWt4a2QwbXNoMnFvNmQxbHJtNTl1In0.f-lypJThd-07AZ36NBvfQw&limit=1'
request({ url: mapBoxUrl, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to mapbox service!')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find location! Try different search.')
    } else {
        console.log('Lat: ', response.body.features[0].center[1])
        console.log('Long', response.body.features[0].center[0])   
    }
})