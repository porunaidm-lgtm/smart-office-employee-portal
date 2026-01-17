const express = require("express");
const router = express.Router();
const employees = require("../data/employees.data");

// GET ALL
router.get("/", (req, res) => {
  res.json(employees); // ✅ array only
});

// GET BY ID
router.get("/:id", (req, res) => {
  const emp = employees.find(
    (e) => e.id === Number(req.params.id)
  );

  if (!emp) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(emp);
});

module.exports = router;
