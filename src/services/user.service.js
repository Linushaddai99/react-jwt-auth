import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

function userService() {
    const getPubliceContent = () => {
        return axios.get(API_URL + 'all')
    }

    const getUserBoard = () => {
        return axios.get(API_URL + 'user', { headers: authHeader() });
      }
    
    const getModeratorBoard = () => {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
      }
    
    const getAdminBoard = () => {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
      }

      return {
        getPubliceContent,
        getUserBoard,
        getModeratorBoard,
        getAdminBoard
      }

}