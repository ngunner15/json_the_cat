const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let errorCb = null;
  let descriptionCb = null;
  request('https://api.thecatapi.com/v1/breeds/search?q=sib',(error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      errorCb = error;
      callback(errorCb, descriptionCb);
    } else if (breedName !== data[0].name) {
      errorCb = "Information about that particular breed is not here."
      callback(errorCb, descriptionCb);
    } else {
      descriptionCb = data[0].description;
      callback(errorCb, descriptionCb);
    }
  });
};

module.exports = { fetchBreedDescription };