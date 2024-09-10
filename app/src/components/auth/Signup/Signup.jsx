import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../../Product/FeaturedProducts";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserAsync, selectLoggedUser } from "../authSlice";

export const Container = styled.div`
  background-color: #fae6fa;
  padding: 1rem;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: auto;
  border-radius: 7px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  background-color: #fff;
`;

export const Input = styled.input`
  width: 200px;
  margin: auto;
  border: 2px solid #572064;
  font-size: 16px;
  padding: 0.5rem 1rem;
  font-family: inherit;
  border-radius: 7px;
`;

export const InputSubmit = styled.input.attrs({ type: "submit" })`
  width: 200px;
  margin: auto;
  border: 2px solid #572064;
  font-size: 16px;
  padding: 0.5rem 1rem;
  font-family: inherit;
  border-radius: 7px;
  background-color: #572064;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

export const Text = styled.p`
  font-weight: 600;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <Container>
        <Form
          onSubmit={handleSubmit((data) => {
            dispatch(
              createUserAsync({
                name: data.name,
                email: data.email,
                password: data.password,
                addresses: [],
                role: "user",
              })
            );
          })}
        >
          <Heading>Sign up</Heading>
          <Input
            placeholder="Enter Name"
            {...register("name", { required: "Name required" })}
            type="name"
          />
          <p style={{ color: "red" }}>{errors?.name?.message}</p>
          <Input
            placeholder="Enter Email"
            {...register("email", {
              required: "email required",
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                message: "email invalid",
              },
            })}
            type="email"
          />
          <p style={{ color: "red" }}>{errors?.email?.message}</p>
          <Input
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: "password required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message: "8 char, 1 uc, 1 lc, 1 num, 1 sc",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors?.password?.message}</p>
          <Input
            type="password"
            placeholder="Confirm password"
            {...register("confirmpassword", {
              required: "confirm password required",
              validate: (value, formValues) =>
                value === formValues.password || "password doesn't match",
            })}
          />
          <p style={{ color: "red" }}>{errors?.confirmpassword?.message}</p>
          <InputSubmit type="submit" value="Sign up" />
          <Text>
            Existing User?
            <NavLink className="no_decoration" to="/login">
              {" "}
              Login
            </NavLink>
          </Text>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
