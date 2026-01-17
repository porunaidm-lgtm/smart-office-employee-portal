export const getEmployeeName = (emp) => {
  if (!emp) return "Unknown Employee";

  // if backend later adds `name`
  if (emp.name && emp.name.trim()) {
    return emp.name;
  }

  const first = emp.first_name || "";
  const last = emp.last_name || "";

  const fullName = `${first} ${last}`.trim();

  return fullName || "Unknown Employee";
};
