const carInfo = carModel.split(" ", 2)
const request = require('request');

var options = {
  'method': 'GET',
  'url': `http://api.carsxe.com/images?key=${imageAPIKey}&make=${carInfo[0]}&model=${carInfo[1]}&format=json`
}
request(options, function(error,response){
  if(error) throw new Error(error)
  const vehicleImage = response["images"]["link"]
  return vehicleImage
})