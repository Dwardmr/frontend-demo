import axios from 'axios';
const URL = 'http://localhost:3001';


export const post = (resource, data) => {
  const queryUrl = `${URL}${resource}`

  try {
    const response = axios.post(queryUrl, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}




