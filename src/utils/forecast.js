const request = require('request');

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=adb7011c4a245411317a5e01f2e75779&query=' + long + ',' + lat + '&units=m'


    //Applying Object Shorthand and Destructuuring
    request({ url, json: true }, (error, {body})=>{
        if(error){
            callback('Unable to conncet weather service!');
        }else if(body.error){
            callback('Unable to find location')
        }else{
            // callback(undefined,{
            //     weather_descriptions : body.current.weather_descriptions[0],
            //     current_temperature : body.current.temperature,
            //     feelslike_temperature : body.current.feelslike
            // })
        
            callback(undefined,
                 body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. But It feels like '+body.current.feelslike +' degrees out.'
                  +'Humidity here is '+body.current.humidity+'%')

        }

    })


    // request({ url: url, json: true }, (error, response)=>{
    //     if(error){
    //         callback('Unable to conncet weather service!');
    //     }else if(response.body.error){
    //         callback('Unable to find location')
    //     }else{
    //         callback(undefined,{
    //             weather_descriptions : response.body.current.weather_descriptions[0],
    //             current_temperature : response.body.current.temperature,
    //             feelslike_temperature : response.body.current.feelslike
    //         })
    //     }

    // })

}

module.exports = forecast