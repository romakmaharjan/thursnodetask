
// const fs = require('fs'); 
// const path = require('path');

// const filelocation = path.join(__dirname, 'contact.csv');


//     fs.readFile(filelocation,'utf8', (err,data) =>{
//         if(err) throw err;
//          if(data) {
//             var dataArray = data.split(/\r?\n/);
//             var toarray= dataArray.map(e => e.split(',').map(e => e.trim()));
             
//             for(let i = 0; i < toarray.length-1; i++){   
//                 // console.log(`Firstname = ${toarray[i][0]}`);
//                 // console.log(`City = ${toarray[i][5]}`);  
//                 // console.log(`Email = ${toarray[i][10]}`);  
//             let fname = toarray[i][0];
//             let cityname = toarray[i][5];
//             let email = toarray[i][10];
//             let array1 = [];
//             array1 = array1.concat(`firstname : ${fname}`, `City name : ${cityname}`, `Email : ${email}`);
//             console.log(array1);
//              }
//          }
//         else console.log('empty file');
//     })


const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
 
    if (req.url === '/') {
     
        content = fs.readFile('100-contacts.csv', 'utf8', (err, data) => {
 
            if (err) throw err;
            if (data) {
 
                console.log('file reading');
               
                var result = `
                    <html>
                    <table border="1">
                    <thead>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Company Name </th>
                        <th>  Address </th>
                        <th> City </th>
                        <th> County </th>
                        <th> State </th>
                        <th> Zip </th>
                        <th> Phone1 </th>
                        <th> Phone </th>
                        <th> Email </th>
 
                    </thead>
                    <tbody>
                `;
 
                const table = data.split('\n').slice(1);
 
                const headers=table[0].split(",");
 
                for(let i=0;i<table.length-1;i++){
 
                    const currentline=table[i].split(",");
                        const obj = {
                            'firstname': currentline[0],
                            'lastname': currentline[1],
                            'companyname': currentline[2],
                            'address': currentline[3],
                            'city': currentline[4],
                            'county': currentline[5],
                            'state': currentline[6],
                            'zip': currentline[7],
                            'phone1': currentline[8],
                            'phone': currentline[9],
                            'email': currentline[10],
                        };
 
                        result += `
                        <tr>
                            <td> ${obj['firstname']} </td>
                            <td> ${obj['lastname']} </td>
                            <td> ${obj['companyname']} </td>
                            <td> ${obj['address']} </td>
                            <td> ${obj['city']} </td>
                            <td> ${obj['county']} </td>
                            <td> ${obj['state']} </td>
                            <td> ${obj['zip']} </td>
                            <td> ${obj['phone1']} </td>
                            <td> ${obj['phone']} </td>
                            <td> ${obj['email']} </td>
 
                        </tr>
                        `;
             
                }
 
                result += `
                    </tbody>
                    </table>
                    </html>
                `;
 
                // console.log(result);
             
                res.writeHeader(200, {
                    'Content-Type': 'text/html'
                });
 
                res.write(result);
                res.end();
               
            } else {
                res.write('404 error');
            }
        });
 
    }
});
 
server.listen(3000, () => console.log('Server is running.'));
    

