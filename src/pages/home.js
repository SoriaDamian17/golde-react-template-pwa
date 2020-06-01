import React from 'react';
import { withUserAgent } from "react-useragent";
import Layout from '../components/Layout';
import Button from '../components/Button/Button';

import '../styles/home.scss';
import LogoComponent from '../components/Logo';

export default withUserAgent((props) => {

    const sizeLogo = props.ua.mobile ? {width: 200, height: 150} : {width: 300, height: 150};

    return (
        <Layout title="Home">
            <div className="main-container">
                <LogoComponent className="logo" width={sizeLogo.width} height={sizeLogo.height} />
                <p className="sub-title">Create your projects using PWA</p>
                <Button title="Go to Repository" href="https://github.com/SoriaDamian17/golde-react-template-pwa"/>
            </div>
        </Layout>
    );
});