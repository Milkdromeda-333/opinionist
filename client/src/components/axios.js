import axios from 'axios';
import data from '../../data.json';

function getPosts() {
    // axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
    //     .then(res => setArr(...res.data))
    //     .catch(err => console.log(new Error(err)));
    return data;
}

export {
    getPosts
};