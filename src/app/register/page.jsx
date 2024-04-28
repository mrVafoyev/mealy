import React from 'react'
import Styled from './styles.module.css'

export default function Register() {
  return (
        <div className={register_container}>
        <form className={Styled.form}>
            <h1 className={Styled.title}>Welcome to MEALY!</h1>
            <input id="input1" className={Styled.inputs} placeholder="First Name" type="text" required/>
            <input id="input2" className={Styled.inputs} placeholder="Last Name" type="text" required/>
            <input id="input3" className={Styled.inputs} placeholder="Email Address" type="email" required/>
            <input id="input4" className={Styled.inputs} placeholder="Password" type="password" required/>
            <button id="submitter">Login</button>
            <span>Bu clicking the button, you are agreeng to our <a href="#">Terms and Services</a></span>
        </form>
    </div>
  )
}
