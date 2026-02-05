export const loginApi = async (payload) => {
  const res = await axiosClient.post(
    "/api/auth/login",
    payload
  );
  return res.data;
};
