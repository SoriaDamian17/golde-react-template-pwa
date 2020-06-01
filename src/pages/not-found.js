import React from 'react';
import { withUserAgent } from "react-useragent";
import Layout from '../components/Layout';
import Button from '../components/Button/Button';
import LogoComponent from '../components/Logo';

export default withUserAgent((props) => {

    const sizeLogo = props.ua.mobile ? {width: 200, height: 150} : {width: 300, height: 150};

    return (
        <Layout title="Not Found">
            <div className="main-container">
                <LogoComponent width={sizeLogo.width} height={sizeLogo.height} />
                <p className="sub-title">Not Found</p>
                <Button title="Go to Repository"/>
            </div>
        </Layout>
    );
});