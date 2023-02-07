import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH,
      payload: await api.login(formData),
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH,
      payload: await api.signup(formData),
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
