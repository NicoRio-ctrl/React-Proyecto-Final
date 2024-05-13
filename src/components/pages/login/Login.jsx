import React, { useEffect } from "react"
import {useForm} from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebaseService"
import "./Login.css"
import { contextCreator } from "../../context/ContextCreator";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const {handleUser, handleErrorUser} = useContext(contextCreator);

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        handleUser(user);
        handleErrorUser(null);

        navigate('/')
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode);
        console.error(errorMessage);
        handleErrorUser(err);
        alert('Usuario y/o contraseña inválidos.')
      });
  
    reset();
  });

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          ></input>
          {errors.email?.type === "required" && <span className="error-message "> {errors.email?.message}</span>}
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
            })}
          ></input>
          {errors.password?.type === "required" && <span className="error-message "> {errors.password?.message}</span>}
        </label>

        <input type="submit" value="Send"/>
      </form>
    </>
  )
}
