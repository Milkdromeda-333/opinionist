import axios from 'axios';

// why do i need this? Why isnt my setup working without it?
axios.defaults.baseURL = `http://localhost:8080/`;

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("auth");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});



const getAllPosts = (cb) => {
    userAxios.get('/api/posts')
        .then(res => {
            cb(res.data);
        })
        .catch(err => console.log(err));
};

export {
    userAxios,
    getAllPosts
};