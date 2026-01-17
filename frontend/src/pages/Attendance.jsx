import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../components/layout/PageWrapper";
import Pagination from "../components/common/Pagination";

import { loadEmployees } from "../features/employees/employees.thunks";
import {
  selectEmployees,
  selectEmployeesLoading,
} from "../features/employees/employees.selectors";

const ITEMS_PER_PAGE = 10;

const Attendance = () => {
  const dispatch = useDispatch();

  const employees = useSelector(selectEmployees) || [];
  const loading = useSelector(selectEmployeesLoading);

  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!employees.length) {
      dispatch(loadEmployees());
    }
  }, [dispatch, employees.length]);

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const name =
        emp.name ||
        `${emp.first_name || ""} ${emp.last_name || ""}`;

      const matchesSearch = `${name} ${emp.email}`
        .toLowerCase()
        .includes(search.toLowerCase());

      const joinDate = emp.joiningDate
        ? new Date(emp.joiningDate)
        : null;

      const matchesFrom =
        !fromDate || (joinDate && joinDate >= new Date(fromDate));

      const matchesTo =
        !toDate || (joinDate && joinDate <= new Date(toDate));

      return matchesSearch && matchesFrom && matchesTo;
    });
  }, [employees, search, fromDate, toDate]);

  const totalPages = Math.ceil(
    filteredEmployees.length / ITEMS_PER_PAGE
  );

  const paginatedEmployees = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, fromDate, toDate]);

  return (
    <PageWrapper title="Attendance Records">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />

        <input
          type="date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading attendance...</p>
      ) : (
        <>
         <div className="table-wrapper">
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Joining Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {paginatedEmployees.length ? (
        paginatedEmployees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>
              {emp.name ||
                `${emp.first_name} ${emp.last_name}`}
            </td>
            <td>{emp.email}</td>
            <td>{emp.joiningDate || "-"}</td>
            <td>
              <span
                className={`badge ${
                  emp.status === "Active"
                    ? "active"
                    : "inactive"
                }`}
              >
                {emp.status}
              </span>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5">No records found</td>
        </tr>
      )}
    </tbody>
  </table>
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

export default Attendance;
