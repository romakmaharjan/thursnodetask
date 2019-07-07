
const fetch = require("node-fetch");





// let aa = getUserAsync('http://localhost:8000/')
// console.log(aa);

async function getUserAsync( )
{
  let response = await fetch('http://localhost:8000/');
  let data = await response.json();
  console.log(data);
}
getUserAsync();


