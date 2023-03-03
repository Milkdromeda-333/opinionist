import axios from 'axios';

// why do i need this? Why isnt my setup working?
axios.defaults.baseURL = `http://localhost:8080/`;

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("auth");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// function getAllPosts() {
//     let posts = '';
//     userAxios.get('/api/posts')
//         .then(res => {
//             posts = res.data;
//             return posts;
//         })
//         .catch(err => console.log(err));
//     return posts;
// }

function createUser(credintials, callback, setInputs) {

}

export {
    createUser,
    userAxios
};