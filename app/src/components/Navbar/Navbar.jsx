import {
  faCartShopping,
  faMagnifyingGlass,
  faRightToBracket,
  faSignOut,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { medium, mobile, tablet } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../auth/authSlice";
import { selectCartItems } from "../cart/cartSlice";

const NavContainer = styled.div`
  height: 60px;
  border-bottom: 2px solid #713d7e;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;

  ${medium({
    height: "180px",
    margin: "auto",
  })}

  ${mobile({
    backgroundColor: "#572064",
  })}
`;

const Wrapper = styled.div`
  margin: auto;
  padding: 10px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${tablet({
    padding: "5px 0",
  })}

  ${medium({
    height: "160px",
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;

  ${tablet({ justifyContent: "center", gap: "5px" })}
  ${medium({ width: "100%", justifyContent: "space-evenly" })}
`;

const Image = styled.img`
  width: 120px;
  border-radius: 7px;
  cursor: pointer;

  ${mobile({ border: "2px solid gold" })}
`;

const Center = styled.div`
  flex: 1;
  ${tablet({ display: "flex", justifyContent: "center", flex: "0.5" })}
  ${medium({ width: "90%", justifyContent: "space-around", order: "1" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #713d7e;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 5px;
  gap: 5px;
  border-radius: 7px;

  ${tablet({ width: "100%" })}
  ${mobile({ backgroundColor: "white" })}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  text-align: center;
  font-family: inherit;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  ${tablet({ justifyContent: "center", gap: "5px" })}
  ${medium({ width: "100%", justifyContent: "space-evenly" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  color: #713d7e;
  padding: 3px 7px;
  border-radius: 7px;

  &:hover {
    color: white;
    background-color: #713d7e;
  }

  ${tablet({
    border: "1px solid #713d7e",
  })}

  ${medium({
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    backgroundColor: "#713d7e",
    color: "white",
  })}

${mobile({
    width: "auto",
    border: "2px solid white",
  })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  const cartItems = useSelector(selectCartItems);

  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Image src="https://i.ibb.co/FhmM4wC/e-bazaar-logo.png" alt="logo" />
          <NavLink to={`/`} className="no_decoration">
            <MenuItem>Home</MenuItem>
          </NavLink>

          <NavLink to={`/products`} className="no_decoration">
            <MenuItem>Products</MenuItem>
          </NavLink>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="search for watch..." />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="purple hand_cursor"
            />
          </SearchContainer>
        </Center>
        <Right>
          <NavLink to="/cart" className="no_decoration">
            <MenuItem>
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItems.length > 0 && (
                <sup
                  style={{
                    marginLeft: "2px",
                    padding: "0 4px",
                    borderRadius: "7px",
                    color: "white",
                    backgroundColor: "#713d7e",
                  }}
                >
                  {cartItems.length}
                </sup>
              )}
            </MenuItem>
          </NavLink>

          {user ? (
            <NavLink to={`/profile`} className="no_decoration">
              <MenuItem>
                <FontAwesomeIcon icon={faUser} /> {user.name}
              </MenuItem>
            </NavLink>
          ) : (
            <NavLink to={`/register`} className="no_decoration">
              <MenuItem>
                Sign up <FontAwesomeIcon icon={faUserPlus} />
              </MenuItem>
            </NavLink>
          )}
          {user ? (
            <NavLink to={`/logout`} className="no_decoration">
              <MenuItem>
                Logout <FontAwesomeIcon icon={faSignOut} />
              </MenuItem>
            </NavLink>
          ) : (
            <NavLink to={`/login`} className="no_decoration">
              <MenuItem>
                Sign in <FontAwesomeIcon icon={faRightToBracket} />
              </MenuItem>
            </NavLink>
          )}
        </Right>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;
