import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/sidebar.css";

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);

  const getLinkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Smart Office</div>

      <nav className="sidebar-menu">
        {/* ADMIN மட்டும் */}
        {user?.role === "ADMIN" && (
          <>
            <NavLink to="/dashboard" className={getLinkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/attendance" className={getLinkClass}>
              Attendance
            </NavLink>

            <NavLink to="/tasks" className={getLinkClass}>
              Tasks
            </NavLink>

            <NavLink to="/profile" className={getLinkClass}>
              Profiles
            </NavLink>
          </>
        )}

        {/* EMPLOYEE மட்டும் */}
        {user?.role === "EMPLOYEE" && (
          <NavLink
            to={`/profile/${user.id}`}
            className={getLinkClass}
          >
            My Profile
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
