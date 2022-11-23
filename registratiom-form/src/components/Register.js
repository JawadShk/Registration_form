import React from 'react';
import Styled from "styled-components";

export default function Register(props) {

    let btnText, passBoxType;
    let btnClass = ["btn", "mt-3 mx-2"];

    if(props.showPass === true){
        btnText = "Hide Password";
        passBoxType = "text";
        btnClass.push("btn-danger");
    }else{
        btnText ="Show Password";
        passBoxType = "password";
        btnClass.push("btn-success");
    }

    const StyledButton = Styled.button`
        display: ${(props) => props.flag ? "inline-block" : "block" };
        padding: 10px 5px;
        background-color: ${(props) => props.bgcolor};
        border: none;
        color: white;
        width: ${(props) => props.flag  === "1" ? "45%" : "100%" };
        margin: 5px;
        border-radius: 5px;
    `;

    const StyleRegisterContainer = Styled.div`
        width: 600px;
        &:hover {
            box-shadow: 0px 0px 5px grey;
        }
        @media(min-width: 0px) and (max-width:600px){
            width:300px;
        }
    `;

  return (
    <StyleRegisterContainer className='container card p-3 mt-3'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group mt-2'>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' className='form-control' required/>
            </div>
            <div className='form-group mt-2'>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' className='form-control' required/>
            </div>
            <div className='form-group mt-2'>
                <label htmlFor="password">Password: </label>
                <input type={passBoxType} name='password' className='form-control' required/>
            </div>
            <button type='submit' className='btn btn-primary mx-2 mt-3'>Register</button>
            <button type='button' className={btnClass.join(" ")} onClick={props.click} >{btnText}</button>
            <br />
            <StyledButton type='button' flag="0" bgcolor='orange'>Login</StyledButton>
            <StyledButton type='button' flag="0" bgcolor='brown'>Login with Google</StyledButton>
            <StyledButton type='button' flag="0" bgcolor='blue'>Login with Facebook</StyledButton>
        </form>
    </StyleRegisterContainer>
  )
}
