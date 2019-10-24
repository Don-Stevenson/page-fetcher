
// getting the data
const url = process.argv[2];
const path = process.argv[3];


// requiring fs
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {
    fs.writeFile(path, body, (err) => {
    if(err) throw err;

    fs.stat(path, (err,stats) => {
      if (err){
        throw err
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
      } 
    })
  });
});

// fs.write(fd, buffer.from(data,options,encoding),callback);

// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.