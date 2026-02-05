import axiosClient from "./axiosClient";

export const loginApi = async (data) => {
  const res = await axiosClient.post(
    "/api/auth/login",
    data
  );

  return res.data;
};
