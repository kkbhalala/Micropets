import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { GlobalStyle } from './global.styles';
import { LandingPage } from './screens/LandingPage/LandingPage.screen';
import PaymentForm from './screens/PaymentForm/paymentForm.screen';
import { UserProvider } from './contexts/userContext';
import './App.css';

const LaunchForm = lazy(() =>
    import ('./screens/LaunchForm/launchForm.screen'));
const PhotoUploadForm = lazy(() =>
    import ('./screens/UploadPhotoForm/uploadPhotoForm.screen'));

function App() {
    return ( <
        UserProvider >
        <
        div >
        <
        GlobalStyle / >
        <
        Suspense fallback = { < GridLoader / > } >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < LandingPage / > }
        /> <
        Route exact path = '/launch-form'
        element = { < LaunchForm / > }
        /> <
        Route exact path = '/payment-form'
        element = { < PaymentForm / > }
        /> <
        Route exact path = '/upload-photo-form'
        element = { < PhotoUploadForm / > }
        /> < /
        Routes > <
        /Suspense> < /
        div >
        <
        /UserProvider>
    );
}

export default App;