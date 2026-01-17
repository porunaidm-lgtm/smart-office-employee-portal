import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../features/auth/auth.thunks";
import {
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from "../features/auth/auth.selectors";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const user = useSelector((state) => state.auth.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email மற்றும் Password அவசியம்");
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  /* 🔑 ROLE BASED REDIRECT */
  useEffect(() => {
    if (isAuth && user) {
      if (user.role === "ADMIN") {
        navigate("/dashboard", { replace: true });
      } else if (user.role === "EMPLOYEE") {
        navigate(`/profile/${user.id}`, { replace: true });
      }
    }
  }, [isAuth, user, navigate]);

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Smart Office</h2>
        <p className="login-subtitle">Employee Login</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="login-error">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
