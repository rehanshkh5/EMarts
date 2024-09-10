import styled from "styled-components";
import { categoriesData } from "../../utils/data.js";
import Category from "../Category/Category";
import { medium, mobile } from "../../utils/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  gap: 10px;

  ${medium({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" })}
  ${mobile({ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" })}
`;

const Categories = () => {
  return (
    <Container>
      {categoriesData.map((ele) => (
        <Category item={ele} key={ele.id} />
      ))}
    </Container>
  );
};

export default Categories;
