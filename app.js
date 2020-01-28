const request = require("request")

const API = require("./APISecrets")

const geoCode = require("./utils/geocode")


// const weatherUrl = "https://api.darksky.net/forecast/9c0eb2fc8b0d0c20e73315c147dc71f8/37.8267,-122.4233"

// const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicml0Y2hleTA3MTMiLCJhIjoiY2s1d3R3aWpsMXl5ejNlbjF1bHd0NmpnZyJ9.6yEkoOP0k3bDlfm6pI0ZpA"

// request({ url: weatherUrl, json: true }, (err, resp) => {
//   // console.log(resp.body.currently)
//   if(err){
//     console.log("unable to connect")
//   } else if (resp.body.error) {
//     console.log("unable to find location")
//   } else {
//     console.log(`It is currently ${resp.body.currently.temperature} degrees. There is a ${resp.body.currently.percipProbability} of rain.`)

//   }
// })

// request({ url:  geoCodeUrl, json: true }, (err, resp) => {
//   const data = resp
//   const latitude = data.body.features[0].center[0]
//   const longitude = data.body.features[0].center[1]
//   if (err) {
//     console.log("an error occured")
//   } else if (data.body.features.length < 1) {
//     console.log("unable to find location, did you misspell it?")
//   } else {
//     console.log(latitude, longitude)

//   }
  
// })



geoCode("columbus", (err, data) => {
  
  console.log("err", err)
  console.log("data", data)
})