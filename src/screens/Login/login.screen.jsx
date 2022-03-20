import React from "react";
import { LoginContainer, LoginFormContainer } from './login.styles';
import { Typography } from '../LandingPage/LandingPage.styles';
import { Input } from '../../components/Input/input.component';
import { CustomButton } from '../../components/Custom-button/custom-button.component';

export const Login = () => {
    return (
        <LoginContainer>
            <div className="login-form">
                <Typography>
                    Login below.
                </Typography>
                <LoginFormContainer>
                    <form onSubmit={() => {}}>
                        <div>
                            <span>Email</span>
                            <Input required type='text' label='Email' name='email' />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input required type='text' label='Password' name='password' />
                        </div>
                        <CustomButton  type='submit'  > Login </CustomButton>
                    </form>
                </LoginFormContainer>
            </div>
        </LoginContainer>
    )
}