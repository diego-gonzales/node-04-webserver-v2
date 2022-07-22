const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Disposition', 'attachment; filename=myList.csv');
  res.writeHead(200, { 'Content-Type' : 'application/csv' });
  // res.writeHead(200, { 'Content-Type' : 'application/json' });
  // const person = {
  //   id: 1,
  //   name: 'Diego'
  // }
  // res.write('Hello World');
  // res.write(JSON.stringify(person));
  res.write('id; nombre\n')
  res.write('1; Fernando\n')
  res.write('2; María\n')
  res.write('3; Luis\n')
  res.write('4; Pablo\n')

  res.end();
}).listen(8080);

console.log('Listening on port ', 8080);