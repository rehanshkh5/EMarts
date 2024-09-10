import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { medium, mobile, tablet } from "../../utils/responsive";
import { NavLink } from "react-router-dom";

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
    transition: transform 0.5s ease;
  }
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: 4;
  color: #572064;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fae6fa;

  &:hover ${Info} {
    opacity: 1;
  }
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductCard = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt={item.id} />
    </Container>
  );
};

export default ProductCard;
