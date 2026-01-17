import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../components/layout/PageWrapper";
import { loadEmployees } from "../features/employees/employees.thunks";
import {
  selectEmployees,
  selectEmployeesLoading,
} from "../features/employees/employees.selectors";
import Profile from "./Profile";

const Dashboard = () => {
  const dispatch = useDispatch();

  const employees = useSelector(selectEmployees) || [];
  const loading = useSelector(selectEmployeesLoading);

  useEffect(() => {
    if (!employees.length) {
      dispatch(loadEmployees());
    }
  }, [dispatch, employees.length]);

  const metrics = useMemo(() => {
    const total = employees.length;
    const active = employees.filter(e => e.status === "Active").length;
    const inactive = employees.filter(e => e.status === "Inactive").length;

    return { total, active, inactive };
  }, [employees]);

  if (loading) {
    return (
      <PageWrapper title="Dashboard">
        <p>Loading dashboard...</p>
      </PageWrapper>
    );
  }

  return (
    
    <PageWrapper title="Dashboard Overview">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Total Employees</div>
          <div className="stat-value">{metrics.total}</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Active Employees</div>
          <div className="stat-value">{metrics.active}</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Inactive Employees</div>
          <div className="stat-value">{metrics.inactive}</div>
        </div>

        <div className="stat-card">
          <div className="stat-title">System Status</div>
          <div className="stat-value">Online</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
