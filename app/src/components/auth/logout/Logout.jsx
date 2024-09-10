import { useEffect } from "react";
import { logoutUserAsync, selectLoggedUser } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);

  useEffect(() => {
    dispatch(logoutUserAsync());
  }, []);

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
};

export default Logout;
