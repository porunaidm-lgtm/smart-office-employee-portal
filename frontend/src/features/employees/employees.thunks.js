import { fetchEmployees } from "../../api/employeeApi";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "./employees.slice";

export const loadEmployees = () => async (dispatch) => {
  try {
    dispatch(fetchStart());

    const data = await fetchEmployees();

    dispatch(fetchSuccess(data)); // ✅ NOT data.employees
  } catch (err) {
    console.error("Employee load failed", err);
    dispatch(fetchFailure("Failed to load employees"));
  }
};
