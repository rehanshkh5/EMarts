import React from "react";
import styled from "styled-components";
import { medium, mobile } from "../../utils/responsive";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../auth/authSlice";
import { Navigate } from "react-router-dom";
import { discountedPrice } from "../../utils/helper";
import "./userProfile.css";
import Loader from "../Loader/Loader";

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



const Text = styled.p``;

const H3 = styled.h3`
  font-weight: 600;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);

  return (
    <Container>
      {!user && <Navigate to="/" replace={true}></Navigate>}

      <Wrapper>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "600",
            textDecoration: "underline",
            textTransform: "uppercase",
          }}
        >
          Your Profile
        </h1>
        <H3>Name : {user?.name}</H3>
        <H3>Email: {user?.email}</H3>

        {user?.addresses.map((ele, i) => (
          <Text key={i}>
            <span>Address {i + 1} : </span>
            <span>
              {ele.address}, {ele.city},{ele.state} - {ele.zip} .
            </span>
          </Text>
        ))}
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
