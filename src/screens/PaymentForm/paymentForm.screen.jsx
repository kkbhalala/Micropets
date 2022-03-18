import React, {useContext} from "react";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeContainer from "../../components/StripeContainer/StripeContainer.component";
import PhotoUploadForm from "../../screens/UploadPhotoForm/uploadPhotoForm.screen";
import {PaymentFormContainer, BillingDetailsContainer} from './paymentForm.styles';
import {UserContext} from '../../contexts/userContext';

const PUBLIC_KEY = 'pk_test_51KaQLBFbFIhjglaIKhPrh02O260VioC4tHo83rN5IKQHqjcTfGZgmZjbRU9ScI5a4Ix2C8QG9jK57V8vFmJcxGug00qU8womln';
const stripePromise = loadStripe(PUBLIC_KEY);

export default function PaymentForm () {
  const userData = useContext(UserContext);
  return (
    <PaymentFormContainer>
      <Elements stripe={stripePromise}>
        <PhotoUploadForm />
        <BillingDetailsContainer>
          <div className="billing-details">
            <div className="lbl-billing">Your Billing Details</div>
            <p className="field-detail">First Name: <span>{userData.firstName}</span></p>
            <p className="field-detail">Last Name: <span>{userData.lastName}</span></p>
            <p className="field-detail">Street Address1: <span>{userData.address1}</span></p>
            <p className="field-detail">Street Address2: <span>{userData.address2}</span></p>
            <p className="field-detail">City: <span>{userData.city}</span></p>
            <p className="field-detail">State: <span>{userData.state}</span></p>
            <p className="field-detail">Zip: <span>{userData.zipCode}</span></p>
          </div>
          <InjectedCheckoutForm />
          {/* <StripeContainer /> */}
        </BillingDetailsContainer>
      </Elements>
    </PaymentFormContainer>
  )
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <StripeContainer stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);