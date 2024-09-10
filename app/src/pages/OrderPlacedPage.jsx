import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { clearCartAsync } from "../components/cart/cartSlice";
import { selectLoggedUser } from "../components/auth/authSlice";

const OrderPlacedPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedUser);

  useEffect(() => {
    // reset user cart
    dispatch(clearCartAsync(user.id));
  }, [dispatch, user]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          gap: "2rem",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjjmLDNoxg8kNazP70eUnRObSsh0Sz8eQbUpkOw1uE0WTKAqBrsmcjOcKHyHRWop5V1c&usqp=CAU"
          alt="tick"
        />
        <h2>Your Order has been Successfully placed.</h2>

        <div>
          <h4>order id: #{Math.round(Math.random(10 * 100) + 1)}</h4>
          <p>
            Thank you! <span>{user.name}</span>
          </p>
          <NavLink to={"/"} className="no_decoration">
            <p>back to home</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderPlacedPage;
