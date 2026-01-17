import { loginApi } from "../../api/authApi";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "./authSlice";
import { setToken, removeToken } from "../../utils/tokenService";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const data = await loginApi(credentials);

    // persist
    setToken(data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(
      loginFailure(
        error.response?.data?.message || "Login failed"
      )
    );
  }
};

export const logoutUser = () => (dispatch) => {
  removeToken();
  localStorage.removeItem("user");
  dispatch(logout());
};
