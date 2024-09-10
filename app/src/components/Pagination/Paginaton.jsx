import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import { medium } from "../../utils/responsive";

const Container = styled.div`
  margin-top: 1rem;
  padding: 5px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  ${medium({
    gap: "3px",
  })}
`;

const Span = styled.span`
  color: white;
  background-color: #572064;
  border-radius: 7px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Button = styled.button`
  border-radius: 7px;
  padding: 5px 10px;
  font-family: inherit;
  border: none;
  font-weight: bold;
  outline: none;
  border: 1px solid #572064;
  color: #572064;
  background-color: #fff;
  cursor: pointer;


`;

const Center = styled.p`
  padding: 0.5rem 1rem;
  width: max-content;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 7px;
`;

const Paginaton = ({ page, setPage, handlePagination, totalItems }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <>
      <Center>
        Showing {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
        {page * ITEMS_PER_PAGE > totalItems
          ? totalItems
          : page * ITEMS_PER_PAGE}{" "}
        of {totalItems} results
      </Center>
      <Container>
        <Span onClick={(e) => handlePagination(page > 1 ? page - 1 : page)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Span>
        {Array.from({ length: totalPages }).map((ele, i) => (
          <Button
            onClick={(e) => handlePagination(i + 1)}
            key={i}
            style={
              i + 1 === page
                ? { backgroundColor: "#572064", color: "#fff" }
                : { backgroundColor: "white", color: "#572064" }
            }
          >
            {i + 1}
          </Button>
        ))}
        <Span onClick={(e) => handlePagination(page < totalPages ? page + 1 : page)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Span>
      </Container>
    </>
  );
};

export default Paginaton;
