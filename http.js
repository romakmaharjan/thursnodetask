// const http = require('http');

// const server = http.createServer((req,res) =>{
// if(req.url === '/'){
//     const fs = require('fs'); 
//     const path = require('path');

//     const filelocation = path.join(__dirname, 'contact.csv');

//     fs.readFile(filelocation,'utf8', (err,data) =>{
//         if(err) throw err;
//         // let toarray = []

//         // res.write(data);
//         res.write(myFunction(data));
//         //Called function here and print them here


//         function myFunction(data){

//             var lines=data.split("\n");

//             var result = [];

//             var headers=lines[0].split(",");


//             for(var i=1;i<lines.length;i++){
//                 var obj = {};
//                 var currentline=lines[i].split(",");

//                 for(var j=0;j<headers.length;j++){
//                     obj[headers[j]] = currentline[j];
//                 }
//                 result.push(obj);
//             }
//             return JSON.stringify(result);
//           }

//     });
// };
// });
// server.listen(8000, () => console.log("your server is running..."));




const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        content = fs.readFile('100-contacts.csv', 'utf8', (err, data) => {

            if (err) throw err;
            if (data) {

                console.log('file processing');

                var lines = data.split("\n");

                var headers = lines[0].split(",");

                for(var i=1; i<lines.length;i++){
                    var obj ={};

                    var currentline=lines[i].split(",");


                    for(var j=0;j<headers.length;j++){
                        obj[headers[j]] = currentline[j];

                    }
                    res.writeHead(200, {
                        'Content-Type': 'application/json'
                    });

                    res.write(JSON.stringify(obj));
                    res.end();

                }


            }
        });

    }
});

server.listen(3000, () => console.log('Server running.'));

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    const filelocation = path.join(__dirname, 'contact.csv');

    fs.readFile(filelocation, 'utf8', (err, data) => {
        if (err) throw err;
        let toarray = []
        toarray = data;
        res.end(JSON.stringify(toarray));
    });



});
server.listen(3000, console.log('server started'));