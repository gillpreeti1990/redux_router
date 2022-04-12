const SHOW_lOADING_DATA = "SHOW_lOADING_DATA";
export const SEARCH_USERS = "SEARCH_USERS";
const STORE_USERS = "STORE_USERS";
export const USER_ID = "USER_ID";
const SHOW_USER_ID = "SHOW_USER_ID";

//task for USERS
export const getUsers = () => ({
  type: SEARCH_USERS,
  payload: {},
});

//for stored USERS
export const storeUsers = (usersList) => ({
  type: STORE_USERS,
  payload: {
    usersList,
  },
});

//task for USER ID
export const userId = ({ id }) => ({
  type: USER_ID,
  payload: {
    id,
  },
});

//for stored USER ID
export const storeUserId = (storeId) => ({
  type: SHOW_USER_ID,
  payload: {
    userId,
  },
});

//global state
const initialState = {
  usersList: {},
  userId: "",
};

//randomImageReducer in configureStore.js line no 3
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERS:
      const { usersList } = action.payload;
      return { ...state, usersList };
    case SHOW_USER_ID:
      const { userId } = action.payload;
      return { ...state, userId };

    default:
      return state;
  }
};
