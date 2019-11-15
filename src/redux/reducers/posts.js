import initialState from './initialState';

export default function (state = initialState.app.posts, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                list: action.data
            };
            break;
        default:
            return {
                ...state
            };
    }
}