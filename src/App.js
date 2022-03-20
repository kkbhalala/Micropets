import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { GlobalStyle } from './global.styles';
import { LandingPage } from './screens/LandingPage/LandingPage.screen';
import PaymentForm from './screens/PaymentForm/paymentForm.screen';
import { Login } from './screens/Login/login.screen';
import { PartneredSchool } from './screens/PartneredSchool/partneredSchool.screen';
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
        />  <
        Route exact path = '/admin/login'
        element = { < Login / > }
        /> <
        Route exact path = '/partnered-school'
        element = { < PartneredSchool / > }
        />   < /
        Routes > <
        /Suspense> < /
        div >
        <
        /UserProvider>
    );
}

export default App;