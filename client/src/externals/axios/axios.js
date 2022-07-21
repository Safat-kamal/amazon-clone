import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL:"https://amazon-----clone.herokuapp.com",
});

export default instance;