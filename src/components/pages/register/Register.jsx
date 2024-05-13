import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../services/firebaseService"
import React, {useRef} from "react"
import {useForm} from "react-hook-form"
import "./Register.css"

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode);
        console.error(errorMessage);
        alert('Usuario ya registrado.')
      });
  
    reset();
  });

  const password = useRef(null)
  password.current = watch("password")

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h2>Create Account</h2>

        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "First name is required.",
              },
              minLength: {
                value: 3,
                message: "First name must be at least three characters long.",
              },
            })}
          />
          {errors.firstName?.type === "required" && (
            <span className="error-message "> {errors.firstName?.message}</span>
          )}
          {errors.firstName?.type === "minLength" && (
            <span className="error-message "> {errors.firstName?.message}</span>
          )}
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last name is required.",
              },
              minLength: {
                value: 3,
                message: "Last name must be at least three characters long.",
              },
            })}
          />
          {errors.lastName?.type === "required" && <span className="error-message "> {errors.lastName?.message}</span>}
          {errors.lastName?.type === "minLength" && <span className="error-message "> {errors.lastName?.message}</span>}
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                message: "Invalid format.",
              },
            })}
          />
          {errors.email?.type === "required" && <span className="error-message "> {errors.email?.message}</span>}
          {errors.email?.type === "pattern" && <span className="error-message "> {errors.email?.message}</span>}
        </label>

        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required.",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message:
                  "Your password must be between eight to twenty characters wit at least two of them being numeric and special respectively.",
              },
            })}
          />
          {errors.password?.type === "required" && <span className="error-message "> {errors.password?.message}</span>}
          {errors.password?.type === "pattern" && <span className="error-message "> {errors.password?.message}</span>}
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Password is required.",
              },

              validate: (value) => value === password.current || "Both passwords must be identical",
            })}
          />
          {errors.confirmPassword?.type === "required" && (
            <span className="error-message "> {errors.confirmPassword?.message} </span>
          )}
          {errors.confirmPassword && <span className="error-message "> {errors.confirmPassword.message} </span>}
        </label>

        <input type="submit" value="Send"/>
      </form>
    </>
  )
}
