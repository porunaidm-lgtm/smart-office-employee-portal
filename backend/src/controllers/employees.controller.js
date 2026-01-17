const employees = require("../data/employees.data");

const getAllEmployees = (req, res) => {
  res.json(employees); // 👈 ARRAY
};

const getEmployeeById = (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return res
      .status(404)
      .json({ message: "Employee not found" });
  }

  res.json(employee);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};
