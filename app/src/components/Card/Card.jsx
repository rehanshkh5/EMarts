import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../Product/productSlice";
import { selectLoggedUser } from "../auth/authSlice";
import { addToCartAsync } from "../cart/cartSlice";
import { discountedPrice } from "../../utils/helper";

const Container = styled.div`
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fae6fa;
  padding: 5px;
  padding-bottom: 10px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const ImageParent = styled.div`
  width: 100%;
  height: 270px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  border-radius: 7px;
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: black;
  padding-left: 10px;
`;
const PriceParent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const Text = styled.p`
  font-weight: 500;

  &:last-child {
    color: gray;
    text-decoration: line-through;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  gap: 1rem;
`;

const Button = styled.button`
  margin: auto;
  color: #5c176b;
  border: 1px solid #5c176b;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 7px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5c176b;
    color: white;
  }
`;

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);

  return (
    <Container>
      <NavLink to={`/products/${item.id}`} className="no_decoration">
        <ImageParent className="image_parent">
          <Image
            src={
              item.thumbnail
                ? item.thumbnail
                : "https://images.pexels.com/photos/16978385/pexels-photo-16978385/free-photo-of-laptop-lying-on-the-desk-office-spaces.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={item.title}
            className="img1"
          />
        </ImageParent>
      </NavLink>

      <Title>{item.title}</Title>
      <PriceParent>
        <Text>
          <FontAwesomeIcon icon={faStar} style={{ color: "#5c176b" }} />{" "}
          {item.rating}
        </Text>
        <Text>₹ {discountedPrice(item)}</Text>
        <Text>₹ {item.price}</Text>
      </PriceParent>
      <BtnContainer>
        <NavLink to={`/products/${item.id}`} className="no_decoration">
          <Button>View Details</Button>
        </NavLink>
      </BtnContainer>
    </Container>
  );
};

export default Card;
