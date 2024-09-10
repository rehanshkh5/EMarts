import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Triangle
        height="150"
        width="150"
        color="#713d7e"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
