const path = require('path');
const http = require('http');
const fs = require('fs');

const filelocation = path.join(__dirname, 'contact.csv');

// console.log(filelocation)
const server = http.createServer((req, res) => {
    fs.readFile(filelocation, 'utf8', (err, data) => {
        if (err) throw err;
        if (data) { 

                console.log('file reading');
                const result =[];

                const table =data.split('\n').slice(1);


                for(let i=0;i<table.length-1;i++){

                    const arrayline=table[i].split(",");

                        const obj ={
                            'firstname': arrayline[0],
                            'lastname':arrayline[1],
                            'city':arrayline[4],
                            'email':arrayline[arrayline.length-1],
                        };

                        result.push(obj);
                }
                //console.log(results);
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });


                // for(i=0; i<)
                // res.write(results);
                res.end(JSON.stringify(result));
            }
            else{
                res.write('404 error');
                res.end();
            }

        });

    });


               
server.listen(4000, () => console.log('Server running.'));
