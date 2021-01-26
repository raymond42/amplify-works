import { LOGOUT_ERROR, LOGOUT_SUCCESS } from '../actions/logoutActionType';

export const initialState = {
  message: null,
  error: null
};

const Logout = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGOUT_ERROR:
      return {
        ...state,
        error: payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        payload,
        isAuthenticated: false,
        loggedIn: false
      };
    default:
      return state;
  }
};
export default Logout;
