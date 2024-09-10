import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <center>
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/0*QOZm9X5er1Y0r5-t"
          alt="404"
          style={{
            width:"550px",
            borderRadius:"20px"
          }}
        />

        <NavLink to={"/"} className="no_decoration">
          <p>Back to home?</p>
        </NavLink>
      </center>
    </div>
  );
};

export default PageNotFound;
