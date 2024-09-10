import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #572064;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  gap: 7px;
`;

const NotificationBar = () => {
  return (
    <Container>
      Free shipping with ₹1000 purchase.    <u>Shop Now</u>
    </Container>
  );
};

export default NotificationBar;
