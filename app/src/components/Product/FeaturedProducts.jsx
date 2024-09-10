import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import { featuredData } from "../../utils/data";
import { medium, mobile, tablet } from "../../utils/responsive";



const Container = styled.div`
  margin: 1rem 2rem;
`;
export const Heading = styled.h2`
  text-align: center;
  font-weight: 500;
  color: #572064;
  text-transform: capitalize;
`;
const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  
  ${tablet({
    gridTemplateColumns: "repeat(3, 1fr)"
  })}
  
  ${medium({
    gridTemplateColumns: "repeat(2, 1fr)"
  })}
  
  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)"
  })}
`;

const FeaturedProducts = () => {
  return (
    <Container>
      <Heading>Featured Products</Heading>
      <Wrapper>
        {featuredData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default FeaturedProducts;


