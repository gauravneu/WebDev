import './static/css/Header.css';
import Cat1 from './static/images/Cat1.jpg';
import GlobalNav from './GlobalNav';
import { useState } from 'react';
function Header({ setPage }) {
    return (
        <header className='header'>
            <img src={Cat1} 
            className='header__logo'
            alt='Feline Cats'/>
            <h1 className='header__title'>Cats are the best!!</h1>
            <GlobalNav className='header__nav' setPage={setPage} />
        </header>
    );
}
export default Header;