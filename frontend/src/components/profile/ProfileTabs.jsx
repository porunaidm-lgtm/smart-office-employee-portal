const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-header">
      <button
        className={`tab ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => setActiveTab("profile")}
      >
        Profile Info
      </button>

      <button
        className={`tab ${activeTab === "work" ? "active" : ""}`}
        onClick={() => setActiveTab("work")}
      >
        Work Details
      </button>

      <button
        className={`tab ${activeTab === "hr" ? "active" : ""}`}
        onClick={() => setActiveTab("hr")}
      >
        HR Details
      </button>
    </div>
  );
};

export default ProfileTabs;
