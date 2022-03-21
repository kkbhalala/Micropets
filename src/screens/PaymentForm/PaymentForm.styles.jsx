import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
    padding-right: 10%;
    padding-left: 10%;
    color: #ffffff;
    font-size: 26px;
    height: 100%;
    width: 100%;
`;

export const BillingDetailsContainer = styled.div`
    display: flex;
    .billing-details{
        display: flex;
        flex-direction: column;
        flex: 1;
        .lbl-billing{
            font-size: 26px;
            margin-bottom: 10px;
        }
        .field-detail{
            font-size: 22px;
            margin: 5px;
            // display: flex;
            // flex-direction: column;
        }
    }
    .promo-payment-wrp{
        flex: 1;
        padding-left: 20px;
    }
`;