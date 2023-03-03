import axios from 'axios';

axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('auth')}`;

function getAllPosts() {
    axios.get('/api/posts')
        .then(res => setAllPosts(res.data))
        .catch(err => console.log(err));
}

export {
    getAllPosts
};