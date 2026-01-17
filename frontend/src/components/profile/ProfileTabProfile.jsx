const ProfileTabProfile = ({ e }) => (
  <div className="profile-tab">
    <p><strong>ID:</strong> {e.id}</p>
    <p><strong>Email:</strong> {e.email || "N/A"}</p>
    <p><strong>Phone:</strong> {e.phone || "N/A"}</p>
    <p><strong>Gender:</strong> {e.gender || "N/A"}</p>
    <p><strong>Address:</strong> {e.address || "N/A"}</p>
  </div>
);

export default ProfileTabProfile;
