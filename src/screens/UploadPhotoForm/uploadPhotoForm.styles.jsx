import styled from 'styled-components';


export const PhotoUploadFormContainer = styled.div`
align-items: flex-end;
// margin-top: 12.5%;
color: #ffffff;
font-size: 26px;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
width: 100%;
    .error-text {
        font-size: 18px;
        color: red;
    }
`;

export const StyledDiv = styled.div`
    padding: 0 20px;
    border: 3px dashed #fff;
    background-color: rgba(107,0,155,0.6);
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 10px;
    position: relative;
    height: 40vh;

    &.upload-err{
        border-color: red;
        color: red;
    }

    .drag-drop-file-wrp{
        text-align: center;
        font-weight: 600;
        .cloud-upload-icon{
            width: 50px;
            height: 50px;
        }
        .btn-select-file{
            padding: 3px 10px;
            margin-top: 10px;
        }
    }
    .media-preview{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;