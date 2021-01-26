import { LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/loginActionTypes';
import checkAuthUser from '../actions/checkAuthUser';

const user = checkAuthUser();

export const initialState = {
  message: null,
  error: null,
  ...user
};

const Login = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loggedIn: true
      };
    default:
      return state;
  }
};
export default Login;
