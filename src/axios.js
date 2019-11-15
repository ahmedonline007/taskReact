import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/login'
});

axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = "application/json";

export default instance;