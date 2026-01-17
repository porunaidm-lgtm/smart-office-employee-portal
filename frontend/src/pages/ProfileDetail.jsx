import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PageWrapper from "../components/layout/PageWrapper";
import { selectEmployees } from "../features/employees/employees.selectors";
import { getEmployeeById } from "../api/employeeApi";
import { getEmployeeName } from "../utils/employeeHelpers";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileTabProfile from "../components/profile/ProfileTabProfile";
import ProfileTabWork from "../components/profile/ProfileTabWork";
import ProfileTabHR from "../components/profile/ProfileTabHR";

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const employees = useSelector(selectEmployees) || [];

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  /* ---------- API fallback ---------- */
  const fetchEmployeeById = useCallback(async () => {
    try {
      const data = await getEmployeeById(id);
      setEmployee(data);
    } catch (err) {
      setEmployee(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  /* ---------- Resolve employee ---------- */
  useEffect(() => {
    const localEmployee = employees.find(
      (e) => String(e.id) === String(id)
    );

    if (localEmployee) {
      setEmployee(localEmployee);
      setLoading(false);
    } else {
      fetchEmployeeById();
    }
  }, [id, employees, fetchEmployeeById]);

  /* ---------- States ---------- */
  if (loading) {
    return (
      <PageWrapper title="Employee Details">
        Loading employee details...
      </PageWrapper>
    );
  }

  if (!employee) {
    return (
      <PageWrapper title="Employee Details">
        <p>Employee not found.</p>
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </PageWrapper>
    );
  }

  /* ---------- Render ---------- */
  return (
    <PageWrapper title="Employee Profile Details">
      <div className="profile-detail-card">
        <ProfileHeader
          name={getEmployeeName(employee)}
          avatar={employee.avatar}
        />

        <ProfileTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="tab-content">
          {activeTab === "profile" && (
            <ProfileTabProfile e={employee} />
          )}
          {activeTab === "work" && (
            <ProfileTabWork e={employee} />
          )}
          {activeTab === "hr" && (
            <ProfileTabHR e={employee} />
          )}
        </div>

        <button
          className="btn-back"
          onClick={() => navigate(-1)}
        >
          ← Back to Profiles
        </button>
      </div>
    </PageWrapper>
  );
};

export default ProfileDetail;
