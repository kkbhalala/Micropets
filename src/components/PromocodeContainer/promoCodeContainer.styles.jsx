import styled  from 'styled-components';

export const PromoContainer = styled.div`
    .promo-text{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        span{
            font-size: 20px;
        }

        input{
            background-color: rgba(107, 0, 155, 0.6);
            border: 1px solid #000;
            border-radius: 8px;
            height: 30px;
            margin-top: 5px;
            color: #fff;
            outline: 0;
            padding: 0 10px;
        }
    }
    button {
        width: 100%;
    }
`;