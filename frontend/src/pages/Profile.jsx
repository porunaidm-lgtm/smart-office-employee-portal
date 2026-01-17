import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import EmployeeFilters from "../components/common/EmployeeFilters";
import Pagination from "../components/common/Pagination";

import { loadEmployees } from "../features/employees/employees.thunks";
import {
  selectEmployees,
  selectEmployeesLoading,
} from "../features/employees/employees.selectors";

const ITEMS_PER_PAGE = 12;

/* ---------- Helper ---------- */
const getEmployeeName = (emp) =>
  emp.first_name && emp.last_name
    ? `${emp.first_name} ${emp.last_name}`
    : emp.name || "Unknown Employee";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const employees = useSelector(selectEmployees) || [];
  const loading = useSelector(selectEmployeesLoading);

  /* ---------- Filters ---------- */
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [department, setDepartment] = useState(searchParams.get("department") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");

  /* ---------- Pagination ---------- */
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!employees.length) {
      dispatch(loadEmployees());
    }
  }, [dispatch]);

  /* ---------- Sync URL ---------- */
  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (department) params.department = department;
    if (location) params.location = location;
    if (status) params.status = status;
    setSearchParams(params);
    setCurrentPage(1);
  }, [search, department, location, status, setSearchParams]);

  /* ---------- Dynamic Filter Options ---------- */
  const departments = useMemo(
    () => [...new Set(employees.map((e) => e.department))],
    [employees]
  );

  const locations = useMemo(
    () => [...new Set(employees.map((e) => e.location))],
    [employees]
  );

  /* ---------- Filter Logic ---------- */
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const name = getEmployeeName(emp).toLowerCase();
      const email = emp.email.toLowerCase();

      return (
        (name.includes(search.toLowerCase()) ||
          email.includes(search.toLowerCase())) &&
        (!department || emp.department === department) &&
        (!location || emp.location === location) &&
        (!status || emp.status === status)
      );
    });
  }, [employees, search, department, location, status]);

  /* ---------- Pagination ---------- */
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  /* ---------- Render ---------- */
  return (
    <PageWrapper title="Employee Profiles">
      <EmployeeFilters
        search={search}
        department={department}
        location={location}
        status={status}
        departments={departments}
        locations={locations}
        onSearchChange={setSearch}
        onDepartmentChange={setDepartment}
        onLocationChange={setLocation}
        onStatusChange={setStatus}
      />

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <>
          <div className="profile-grid">
            {paginatedEmployees.map((emp) => (
              <div
                key={emp.id}
                className="profile-card"
                onClick={() => navigate(`/profile/${emp.id}`)}
              >
                <img src={emp.avatar} alt={getEmployeeName(emp)} />
                <h3>{getEmployeeName(emp)}</h3>
                <p>{emp.email}</p>
                <small>Employee ID: {emp.id}</small>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </PageWrapper>
  );
};

export default Profile;
