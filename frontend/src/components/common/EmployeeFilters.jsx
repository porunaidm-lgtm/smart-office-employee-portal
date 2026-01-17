// components/common/EmployeeFilters.jsx
import { memo } from "react";

const EmployeeFilters = ({
  search,
  department,
  location,
  status,
  departments = [],
  locations = [],
  onSearchChange,
  onDepartmentChange,
  onLocationChange,
  onStatusChange,
}) => {
  return (
    <div className="filters">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Department */}
      <select
        value={department}
        onChange={(e) => onDepartmentChange(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((dep) => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
};

export default memo(EmployeeFilters);
