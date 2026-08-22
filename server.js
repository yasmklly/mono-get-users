import http from 'node:http';

const users = [{
  name: 'Alex Bessa',
  email: 'alex@email.com'
}, {
  name: 'Valdiana Bessa',
  email: 'valdiana@email.com'
}, {
  name: 'Ana Bessa',
  email: 'ana@email.com'
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