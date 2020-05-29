import React, {useEffect} from 'react';
import './Layout.scss';
import EarthComponent from '../Earth';
import MoonComponent from '../Moon';
import AstronautComponent from '../Astronaut';
import RocketComponent from '../Rocket';

const Layout = (props) => {

    const { title, children } = props;

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="layout">
            <div className="start">
                {children}
                <div className="object">
                    <RocketComponent className="rocket" width={40} height={29} />
                    <EarthComponent className="earth" width={100} height={100} />
                    <MoonComponent className="moon" width={80} height={80}/>
                    <div className="object_astronaut">
                        <AstronautComponent className="astronaut" width={140} height={179}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;