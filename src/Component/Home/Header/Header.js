import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.scss'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import NavBar from '../../Shared/NavBar/NavBar';
const Header = () => {
    return (
        <div className="headerContainer">
            <NavBar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;