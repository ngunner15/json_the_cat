const request = require('request');
const args = process.argv.slice(2);

const breedCatcher = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
    if (error) {
      console.log("Error is: ", error);
    }
    const data = JSON.parse(body);
    if (breed === data[0].name) {
      console.log(data[0].description);
    } else {
      console.log("We dont have information regarding that breed of cat...");
    }
  });
};

breedCatcher(args[0]);