const URL = process.argv[2];
const filePath = process.argv[3];
const request = require("request");
const fs = require("fs");


// Write a new file in the specified path with the body of the URL page
request(URL, (error, response, body) => {
  // write file into the filePath
  if (typeof filePath !== "string" || filePath.length <= 0) {
    return console.log("Download failed!");
  } else if (response.statusCode > 299) {
    return console.log("Error with the server!");
  } else {
  fs.writeFile(filePath, body, (error) => {
    if (error) throw error;
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`);
    });
  }
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
});
