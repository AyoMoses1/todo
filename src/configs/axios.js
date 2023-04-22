/*eslint-disable*/ 
import axios from "axios"; 

export const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {'X-Custom-Header': 'foobar'}
});

export const Authinstance = axios.create({
  baseURL : 'localhost:8080/api/v1/',
  headers: {
    Authorization: `<Your Auth Token>`,
    'Content-Type': "application/json",
  }, 
  // .. other options
});

