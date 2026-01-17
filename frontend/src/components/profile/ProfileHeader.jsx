const ProfileHeader = ({ name, avatar }) => {
  return (
    <div className="profile-header">
      <img
        src={avatar || "https://via.placeholder.com/120"}
        alt={name}
        className="profile-detail-avatar"
      />
      <h2 style={{ textAlign: "center" }}>
        {name || "Unknown Employee"}
      </h2>
    </div>
  );
};

export default ProfileHeader;
