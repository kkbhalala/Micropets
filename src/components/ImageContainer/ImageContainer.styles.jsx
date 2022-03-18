import styled from 'styled-components';

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    max-width: 40%;

    @media (max-width: 992px) {
        max-width: 100%;
        margin: auto;
    }


    .logo-wrp{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        // img:first-child{
        //     margin-right: 90px;
        // }
    }
`;