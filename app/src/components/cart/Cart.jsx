import styled from "styled-components";
import { medium, mobile } from "../../utils/responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletCartItemAsync,
  selectCartItems,
  selectCartStatus,
  updateToCartAsync,
} from "./cartSlice";
import { useState } from "react";
import { discountedPrice } from "../../utils/helper";
import Loader from "../Loader/Loader";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 20px;
  ${medium({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
  text-transform: uppercase;
  border: 1px solid black;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Product = styled.div`
  background-color: #fae6fa;
  display: flex;
  justify-content: space-between;
  border: 1px solid #572064;
  align-items: center;
  padding: 1rem;
  border-radius: 7px;
  ${medium({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  ${medium({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1rem;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #572064;
  color: white;
  font-weight: 600;
  border: none;
  outline: none;
`;
const Cart = () => {
  const products = useSelector(selectCartItems);
  const status = useSelector(selectCartStatus);
  const dispatch = useDispatch();

  const totalItems = products.reduce((total, item) => item.quantity + total, 0);
  const totalPrice = products.reduce(
    (sum, item) => discountedPrice(item.product) * item.quantity + sum,
    0
  );

  const handleItemCount = (e, product) => {
    dispatch(updateToCartAsync({ id: product.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deletCartItemAsync(id));
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <NavLink to="/products" className="no_decoration">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </NavLink>
          <TopTexts>
            <TopText>Cart Items: {products.length}</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          {status === "loading" ? (
            <Loader />
          ) : (
            <Info>
              {products.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image
                      src={
                        item.product.thumbnail &&
                        "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                    />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item.product.id}
                      </ProductId>
                      <ProductSize>
                        <b>Size:</b> 37.5
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <select
                        onChange={(e) => handleItemCount(e, item)}
                        value={item.quantity}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {discountedPrice(item.product)}
                    </ProductPrice>
                  </PriceDetail>
                  <TopButton onClick={(e) => handleRemove(e, item.id)}>
                    remove
                  </TopButton>
                </Product>
              ))}

              <Hr />
            </Info>
          )}

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Items</SummaryItemText>
              <SummaryItemPrice>{totalItems}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <NavLink to={"/checkout"} className="no_decoration">
              <Button>CHECKOUT NOW</Button>
            </NavLink>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
