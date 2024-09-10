import styled from "styled-components";
import { medium } from "../../utils/responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3;
  height: 40vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  border-radius: 7px;
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

const Title = styled.h3`
  color: white;
  font-weight: 500;
  font-family: inherit;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  font-weight: 600;
  color: black;
  cursor: pointer;
  border-radius: 7px;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Image src={item.imgUrl} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <NavLink to={"/products"} className="no_decoration">
          <Button>Shop Now</Button>
        </NavLink>
      </Info>
    </Container>
  );
};

export default Category;
