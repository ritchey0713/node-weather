const request = require("request")

const forecast = (longitude, latitude, callback) => {
  const URL = `https://api.darksky.net/forecast/9c0eb2fc8b0d0c20e73315c147dc71f8/${latitude},${longitude}`
  request({ url: URL, json:true }, (err, resp) => {
    if(err) {
      callback("couldnt connect to service", undefined)
    } else if (resp.body.error) {
      console.log("cannot find location")
    } else {
      console.log(resp.body)
    }
  })
}
module.exports = forecast