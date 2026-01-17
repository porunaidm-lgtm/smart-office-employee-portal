const generateToken = require("../utils/generateToken");
const employees = require("../data/employees.data");

const login = (req, res) => {
  const { email, password } = req.body;

  // 🔐 ADMIN LOGIN
  if (email === "admin@test.com" && password === "123456") {
    const user = {
      id: 1,
      name: "Admin",
      email,
      role: "ADMIN",
    };

    return res.status(200).json({
      success: true,
      user,
      token: generateToken(user),
    });
  }

  // 👤 EMPLOYEE LOGIN (email based)
  const employee = employees.find(
    (e) => e.email === email
  );

  if (employee) {
    const user = {
      id: employee.id,
      name: `${employee.first_name} ${employee.last_name}`,
      email: employee.email,
      role: "EMPLOYEE",
    };

    return res.status(200).json({
      success: true,
      user,
      token: generateToken(user),
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
};

module.exports = { login };
