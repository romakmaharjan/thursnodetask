fetch('http://localhost:4000/')
.then(response=>{
    return response.json();

})
.then(data =>{
    console.log(JSON.stringify(data));
})

// console.log('here');
//         async function getData() {
//             const response = await fetch('http://localhost:4000/');
//             const jsondata = await response.json();
//             console.table(jsondata.result[0]);
//         }
//         getData().catch(err => console.error(err));