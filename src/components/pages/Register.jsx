import React from 'react'
import {useForm} from 'react-hook-form'
import './Login&Register.css'

export default function Register(){

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    })

    return(
        <>
            <form className='form'>
                <h2>Create Account</h2>

                <label htmlFor='firstName'>First Name<input type='text' name='firstName' id='firstName'
                    {...register('firstName', {
                        required:{
                            value: true,
                            message: 'First name is required.',
                        },
                        minLength:{
                            value: 3,
                            message: 'First name must be at least three characters long.',
                        },
                    })}/>
                    {errors.firstName?.type === 'required' && <span> {errors.firstName?.message}</span>}
                    {errors.firstName?.type === 'minLength' && <span> {errors.firstName?.message}</span>}
                </label>

                <label htmlFor='lastName'>Last Name<input type='text' name='lastName' id='lastName'
                    {...register('lastName', {
                            required:{
                                value: true,
                                message: 'Last name is required.',
                            },
                            minLength:{
                                value: 3,
                                message: 'Last name must be at least three characters long.',
                            },
                    })}/>
                    {errors.lastName?.type === 'required' && <span> {errors.lastName?.message}</span>}
                    {errors.lastName?.type === 'minLength' && <span> {errors.lastName?.message}</span>}
                </label>

                <label htmlFor='email'>Email<input type='text' name='email' id='email'
                    {...register('email', {
                            required:{
                                value: true,
                                message: 'Email is required.',
                            },
                            pattern:{
                                value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                                message: 'Invalid format.',
                            },
                    })}/>
                    {errors.email?.type === 'required' && <span> {errors.email?.message}</span>}
                    {errors.email?.type === 'pattern' && <span> {errors.email?.message}</span>}
                </label>

                <label htmlFor='password'>Password<input type='text' name='password' id='password'
                    {...register('password', {
                            required:{
                                value: true,
                                message: 'Password is required.',
                            },
                            pattern:{
                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                                message: 'Your password must be between eight to twenty characters wit at least two of them being numeric and special respectively.',
                            },
                    })}/>
                    {errors.password?.type === 'required' && <span> {errors.password?.message}</span>}
                    {errors.password?.type === 'pattern' && <span> {errors.password?.message}</span>}
                </label>

                <input type="submit" value="Send"/>
            </form>
        </>
    )
}

// IMPORTANTE!!!!! EL ...REGISTER VA COMO ATRIBUTO DEL INPUT, NO CERRAR EL > ANTES DEL REGISTER