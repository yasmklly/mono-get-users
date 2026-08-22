import http from 'node:http';

const users = [{
  name: 'Yasmim Mikelly',
  email: 'yasmim@email.com'
}, {
  name: 'Ravena',
  email: 'ravena@email.com'
}, {
  name: 'Rihanna',
  email: 'rihanna@email.com'
}];

http.createServer((request, response) => {
  if(request.url !== '/users'){
    response.writeHead(
        404,
        {'content-type': 'application/json'}
    )
    response.end(JSON.stringify({
        error: 404,
        message: 'Resource not found.'
    }));
    return;
  }

  response.writeHead( 200, 
    { "content-type": "application/json" } 
); 
    response.end(JSON.stringify(users));
}).listen(3000);