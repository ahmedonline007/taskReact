import * as types from './types';
import axios from 'axios';

export function fetchPosts(user_id) {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts${user_id ? '?userId=' + user_id : ''}`)
            .then(function (response) {
                dispatch(setPosts(response.data));
            })
            .catch(function (error) {
                dispatch(setPosts([]));
            });
    };
}

function setPosts(data) {
    return {
        type: types.SET_POSTS,
        data
    }
}
