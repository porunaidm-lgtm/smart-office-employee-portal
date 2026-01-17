import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/auth/auth.thunks";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logoutUser());
      navigate("/login");
    }
  };

  return (
    <header className="navbar">
      <h2>
        {user?.role ? `${user.role} Dashboard` : "Smart Office"}
      </h2>

      <div className="navbar-right">
        {user?.name && (
          <span style={{ fontSize: "14px" }}>
            Hi, {user.name}
          </span>
        )}

        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
