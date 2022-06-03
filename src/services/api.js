import axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1';


/**
 *
 *
 * @name userLogin
 * @param {string} username
 * @param {string} password
 * @return {object} response with token 
 */
export async function userLogin(username, password) {
  return await axios
    .post(`${BASE_URL}/user/login`, {
      username,
      password
    })
    .then(response => {
      console.log('ok', response);
      fetchUserProfile(response.data.body.token)  
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error);
      }
    });
}


/**
 *
 *@name fetchUserProfile
 * @param {string} token
 * @return {string} User profile informations 
 */

export async function fetchUserProfile(token) {
  return await axios.post(
    `${BASE_URL}/user/profile`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  .then(request => {
    console.log(request.data);
    return request.data.body;
  })
  .catch(error => console.error('2 ' + error));
}