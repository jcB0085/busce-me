import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt br2" options={{ max: 60 }} /*style={{ height: 150, width: 150 }}*/ >
                <div className="Tilt-inner">
                    <img alt='Busce-mi logo' src={logo} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;