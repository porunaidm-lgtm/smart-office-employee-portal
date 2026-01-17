import { createSelector } from "@reduxjs/toolkit";

export const selectEmployeesState = (state) =>
  state.employees;

export const selectEmployees = createSelector(
  [selectEmployeesState],
  (employeesState) => employeesState.list
);

export const selectEmployeesLoading = createSelector(
  [selectEmployeesState],
  (employeesState) => employeesState.loading
);
