const request = require("request")

const geoCode = (address, callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoicml0Y2hleTA3MTMiLCJhIjoiY2s1d3R3aWpsMXl5ejNlbjF1bHd0NmpnZyJ9.6yEkoOP0k3bDlfm6pI0ZpA`
  request({ url: URL, json: true }, (err, resp)  => {
    if (err) {
      callback("UNABLE TO CONNECT TO LOCATION SERVICES!", undefined)
    } else if (resp.body.features.length < 1) {
      callback("UNABLE TO FIND LOCATION!", undefined)
    } else {
      callback(undefined, {
        latitude: resp.body.features[0].center[0],
        longitude: resp.body.features[0].center[1],
        location: resp.body.features[0].place_name
      })
        
    }
  })
}

module.exports = geoCode

