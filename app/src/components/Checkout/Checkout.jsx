import styled from "styled-components";
import { medium } from "../../utils/responsive";
import { useForm } from "react-hook-form";
import { selectLoggedUser, updateUserAsync } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectCartItems } from "../cart/cartSlice";
import { NavLink, Navigate } from "react-router-dom";
import { discountedPrice } from "../../utils/helper";

const Container = styled.div`
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1rem;
`;

const Flexer = styled.div`
  display: flex;
  gap: 2rem;

  ${medium({
    flexWrap: "wrap",
  })}
`;

const AddressBox = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Select = styled.select``;

const Button = styled.button`
  cursor: pointer;
`;

const Text = styled.p``;

const Checkout = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedUser);
  const selectedCartItems = useSelector(selectCartItems);
  // const currentOrder = useSelector(selectCurrentOrder);

  const totalItems = selectedCartItems.reduce(
    (total, item) => item.quantity + total,
    0
  );
  const totalPrice = selectedCartItems.reduce(
    (sum, item) => discountedPrice(item.product) * item.quantity + sum,
    0
  );

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMode, setPaymentMode] = useState("cash");

  const handleAddress = (e) => {
    setSelectedAddress(user.addresses[e.target.value]);
  };
  const handlePayment = (e) => {
    setPaymentMode(e.target.value);
  };



  return (
    <>
      <Container>
        <h3>Personal Information</h3>
        <Form
          onSubmit={handleSubmit((data) => {
            dispatch(
              updateUserAsync({ ...user, addresses: [...user.addresses, data] })
            );
            reset();
          })}
        >
          <Flexer>
            <InputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                placeholder="minato namikaze"
                {...register("name", { required: "name is required" })}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email address</Label>
              <Input
                placeholder="email@domain.com"
                {...register("email", { required: "email is required" })}
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                placeholder="India"
                {...register("country", { required: "country is required" })}
              />
            </InputContainer>
          </Flexer>
          <Flexer>
            <InputContainer>
              <Label htmlFor="address">Street Address</Label>
              <Input
                placeholder="baker street, london"
                {...register("address", { required: "address is required" })}
                id="address"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="city">City</Label>
              <Input
                placeholder="london"
                {...register("city", { required: "city is required" })}
                id="city"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="state">State / Province</Label>
              <Input
                placeholder="maharashtra"
                {...register("state", { required: "state is required" })}
                id="state"
              />
            </InputContainer>
          </Flexer>
          <Flexer>
            <InputContainer>
              <Label htmlFor="phone">Phone</Label>
              <Input
                placeholder="964238****"
                {...register("phone", { required: "phone is required" })}
                id="phone"
                type="number"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="zip">Zip / Postal code</Label>
              <Input
                placeholder="000000"
                {...register("zip", { required: "zip code is required" })}
                id="zip"
                type="number"
              />
            </InputContainer>
          </Flexer>
          <Flexer>
            <Button type="submit">Save Address</Button>
          </Flexer>
        </Form>

        <h3>Saved Addresses</h3>
        <InputContainer>
          {user.addresses.map((ele, i) => (
            <Flexer key={i}>
              <input
                type="radio"
                name="address"
                id="address"
                value={i}
                onChange={handleAddress}
              />
              <AddressBox>
                <Text>
                  {ele.name} - {ele.phone}
                </Text>
                <Text>
                  {ele.address}, {ele.city}.
                </Text>
              </AddressBox>
            </Flexer>
          ))}
        </InputContainer>

        <h3>Payment Methods</h3>
        <InputContainer>
          <Flexer>
            <input
              checked={paymentMode === "card"}
              onChange={handlePayment}
              type="radio"
              name="paymentmode"
              id="card"
              value="card"
            />
            <label htmlFor="card">Card</label>
          </Flexer>
          <Flexer>
            <input
              checked={paymentMode === "netbank"}
              onChange={handlePayment}
              type="radio"
              name="paymentmode"
              id="netbanking"
              value="netbank"
            />
            <label htmlFor="netbanking">Net banking</label>
          </Flexer>
          <Flexer>
            <input
              checked={paymentMode === "cash"}
              onChange={handlePayment}
              type="radio"
              name="paymentmode"
              id="cash"
              value="cash"
            />
            <label htmlFor="cash">Cash on delivery</label>
          </Flexer>
        </InputContainer>

        <NavLink to={"/order-placed"}>
          <Button>Place Order</Button>
        </NavLink>
      </Container>
    </>
  );
};

export default Checkout;
