import axiosClient from "./axiosClient";

export const fetchEmployees = async () => {
  const res = await axiosClient.get("/api/employees");
  return res.data; // ✅ ARRAY (60)
};

export const getEmployeeById = async (id) => {
  const res = await axiosClient.get(`/api/employees/${id}`);
  return res.data;
};
