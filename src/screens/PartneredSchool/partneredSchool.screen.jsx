import React from "react";
import { PartneredSchoolFormContainer, FormContainer } from './partneredSchool.styles';
import { Typography } from '../LandingPage/LandingPage.styles';
import { Input } from '../../components/Input/input.component';
import { CustomButton } from '../../components/Custom-button/custom-button.component';

export const PartneredSchool = () => {
    return (
        <PartneredSchoolFormContainer>
            <div className="login-form">
                <Typography>
                    Personal Promo Code
                </Typography>
                <FormContainer>
                    <form onSubmit={() => {}}>
                        <div>
                            <span>Email Address</span>
                            <Input required type='text' label='Email' name='email' />
                        </div>
                        <div>
                            <span>School Code</span>
                            <Input required type='text' label='SchoolCode' name='schoolCode' />
                        </div>
                        <CustomButton type='submit'> Generate Promo Code </CustomButton>
                    </form>
                </FormContainer>
            </div>
        </PartneredSchoolFormContainer>
    )
}