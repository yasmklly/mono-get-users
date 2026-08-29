import { findAllUser } from '../services/user.service.js'

export function getAllUser(response) {
    const users = findAllUser();

  response.writeHead(
    200,
    { 'content-type': 'application/json' }
  );
    response.end(JSON.stringify(users));
}