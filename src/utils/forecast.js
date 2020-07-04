const request = require('request')

const forecast = (latitiude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=a6cedb0fd41c6cb05576ba7d9bdebe0d&query='+latitiude+ ',' +longitude+ '&units=m'

request({ url, json: true }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, 'Currently, tempertaure is ' +body.current.temperature+ ' but it feels like ' + body.current.feelslike+ '. Humidity is ' +body.current.precip+'.')
    }
            // temperature: body.current.temperature, 
            // feelslike: body.current.feelslike,
            // precip: body.current.precip 
            // callback(undefined,  ' It is currently ' +body.current.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            // console.log('the temperature is' +body.current.temperature+ 'feels like' + body.current.feelslike+ '. Humidity is' +body.current.precip)
        
    })
}

module.exports = forecast