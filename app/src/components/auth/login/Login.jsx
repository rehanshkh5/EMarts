import React from "react";
import { Container, Form, Input, Text, InputSubmit } from "../Signup/Signup";
import { Heading } from "../../../components/Product/FeaturedProducts";
import { NavLink, Navigate } from "react-router-dom";
import {
  authenticateUserAsync,
  selectAuthStatus,
  selectError,
  selectLoggedUser,
} from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedUser);
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      {user && <Navigate to={"/"} replace={true}></Navigate>}
      <Container>
        <Form
          onSubmit={handleSubmit((data) => {
            dispatch(
              authenticateUserAsync({
                email: data.email,
                password: data.password,
              })
            );
          })}
        >
          <Heading>Login</Heading>
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

          <Input
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: "password required",
            })}
          />

          {error && <p style={{ color: "red" }}>{error || error.message}</p>}
          <InputSubmit type="submit" value="Login" />
          <Text>
            Existing User?
            <NavLink className="no_decoration" to="/register">
              {" "}
              Sign up
            </NavLink>
          </Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
