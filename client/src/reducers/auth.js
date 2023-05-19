import { AUTH, LOGOUT, GETUSER } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, authData: null };
    case GETUSER:
      return { ...state, authData: action?.payload };
    default:
      return state;
  }
};

export default authReducer;
