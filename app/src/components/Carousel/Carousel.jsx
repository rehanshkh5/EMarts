import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { slides } from "../../utils/data.js";
import { medium, mobile, tablet } from "../../utils/responsive.js";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${tablet({ height: "40vh" })}
  ${mobile({ height: "30vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  color: #572064;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  filter: brightness(60%);
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 3rem;
  color: white;
  font-weight: 500;
  font-family: inherit;
  letter-spacing: 1px;

  ${tablet({ fontSize: "2rem" })}
  ${medium({ fontSize: "2rem" })}
  ${mobile({ fontSize: "1rem" })}
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: white;
  font-weight: 600;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  border-radius: 2px;
`;

const Carousel = () => {
  const [slideindex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "prev") {
      setSlideIndex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setSlideIndex(slideindex < slides.length - 1 ? slideindex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("prev")}>
        <FontAwesomeIcon icon={faLeftLong} />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        {slides.map((ele) => (
          <ImageContainer key={ele.id}>
            <Image src={ele.imgUrl} alt={ele.title} />
            <Info>
              <Title>{ele.title}</Title>
              <NavLink to={"/products"} className="no_decoration">
                <Button>Shop Now</Button>
              </NavLink>
            </Info>
          </ImageContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("next")}>
        <FontAwesomeIcon icon={faRightLong} />{" "}
      </Arrow>
    </Container>
  );
};

export default Carousel;
