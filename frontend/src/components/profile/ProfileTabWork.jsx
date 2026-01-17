const ProfileTabWork = ({ e }) => (
  <div className="profile-tab">
    <p><strong>Department:</strong> {e.department || "N/A"}</p>
    <p><strong>Designation:</strong> {e.designation || "N/A"}</p>
    <p><strong>Experience:</strong> {e.experience ?? "N/A"} years</p>
    <p><strong>Location:</strong> {e.location || "N/A"}</p>
    <p><strong>Status:</strong> {e.status || "N/A"}</p>
  </div>
);

export default ProfileTabWork;
