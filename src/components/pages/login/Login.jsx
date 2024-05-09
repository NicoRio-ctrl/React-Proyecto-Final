import React from "react"
import {useForm} from "react-hook-form"
import "./Login.css"

export default function Login() {
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

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data, null, 2))
    reset()
  })

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

        <input type="submit" value="Send" />
      </form>
    </>
  )
}

// 1) Declarar las variables y funciones a utilizar de useForm - line 11~22 OK
// 2) Registrar las variables con sus mensajes - line 31~39 & 46~58 OK
// 3) expresar los mensajes de error - line 41~42 & 60~62 OK
// 4) Usar la funcion 'handleSubmit' pending...
// 5) implementar watch, reset y setvalue pending...
// 6) REGEX pending...
// 7) Data base pending...

// Declaro las funciones que voy a utilizar del hook 'useForms'
