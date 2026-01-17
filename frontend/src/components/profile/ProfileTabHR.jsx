const ProfileTabHR = ({ e }) => (
  <div className="profile-tab">
    <p><strong>Salary:</strong> ₹{e.salary ?? "N/A"}</p>
    <p><strong>Status:</strong> {e.status || "N/A"}</p>
    <p><strong>Attendance %:</strong> {e.attendance ?? "N/A"}%</p>
    <p><strong>Leaves Taken:</strong> {e.leaves ?? "N/A"}</p>
    <p><strong>Performance:</strong> {e.performance || "N/A"}</p>
  </div>
);

export default ProfileTabHR;
