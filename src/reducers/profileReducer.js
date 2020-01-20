import {
    ADD_NEW_POST,
    GET_USER,
    SET_APARTMENTS,
    SET_CURRENT_PAGE,
    SET_REALTORS,
    UPDATE_TEXT_NEW_POST
} from "../common/constants";

const initState = {
  posts: [
      {id:1, name: "First Post", countOfLikes: "20"},
      {id:2, name: "Second Post", countOfLikes: "15"}
  ],
    newPostText: ''
};

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: state.posts.length + 1,
                name: state.newPostText,
                countOfLikes: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case UPDATE_TEXT_NEW_POST: {
            return {...state, newPostText: action.newText};
        }
        default:
            return state
    }
}

export const addNewPostActionCreator = (apatments) => ({type: ADD_NEW_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_TEXT_NEW_POST, newText: text});

export default profileReducer;