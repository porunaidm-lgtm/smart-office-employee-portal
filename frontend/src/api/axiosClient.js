import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://smart-office-employee-portal.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
