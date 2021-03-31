import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinder-back-julien.herokuapp.com/"
})

export default instance;