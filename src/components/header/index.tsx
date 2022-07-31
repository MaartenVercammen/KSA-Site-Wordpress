import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav';
import HeaderImage from './header-image';

const Header: React.FC = ()=>{
    return(
    <header>
        <HeaderImage/>
        <Navbar/>
    </header>
    );
}

export default Header