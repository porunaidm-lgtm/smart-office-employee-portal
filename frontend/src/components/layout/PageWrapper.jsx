import Navbar from "./Navbar";

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      {children}
    </>
  );
};

export default PageWrapper;