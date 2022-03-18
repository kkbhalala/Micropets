import React from "react";
import Logo1 from '../../assets/images/logo1.png';
import Logo2 from '../../assets/images/logo2.png';
import LaunchInto from '../../assets/images/LaunchInto.png';
import { ImagesContainer } from "./ImageContainer.styles";

export const ImageContainer = () => {
    return(
        <ImagesContainer>
            <div className="logo-wrp">
                <img src={Logo1} alt="logo1" />
                <img src={Logo2} alt="logo2" />
            </div>
            <img src={LaunchInto} alt="intro" />
        </ImagesContainer>
    )
}