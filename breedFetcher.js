
const request = require('request');
request('https://api.thecatapi.com', (error, body) => {
  console.log('error:', error);
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});