export const GET_POSTS = "GET_POSTS";
export const STORE_POSTS = "STORE_POSTS";

export const getPosts = () => ({
  type: GET_POSTS,
  payload: {},
});

export const storePosts = (postsList) => ({
  type: STORE_POSTS,
  payload: {
    postsList,
  },
});

const initialState = {
  postsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_POSTS:
      const { postsList } = action.payload;
      return { ...state, postsList };
    default:
      return state;
  }
};
