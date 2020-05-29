import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button/Button';

import '../styles/home.scss';
import LogoComponent from '../components/Logo';

export default () => {

    return (
        <Layout title="Home">
            <div className="main-container">
                <LogoComponent width={300} height={206} />
                <p>Building your projects used PWA</p>
                <Button title="Go to Repository"/>
            </div>
        </Layout>
    );
};