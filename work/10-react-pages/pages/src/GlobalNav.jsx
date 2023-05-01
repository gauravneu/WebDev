
import './static/css/GlobalNav.css';
import { useState } from 'react';
import menu from './menu';

function GlobalNav({className, setPage}){

    const [showMenu, setShowMenu] = useState(false);
    const list = menu.map(item =>{
        return(
            <li className='global-nav__item' key={item.name}>
                <a className='global-nav__link' href={item.path} onClick = {
                    (e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }
                    }>
                    {item.name}
                    </a>
            </li>
        )
    }
    );


const menuClass = showMenu ? 'global-nav__list--open' : '';
    return(
        <nav className={`${className} global-nav`}>
            <button 
            onClick={() => setShowMenu(!showMenu)}
            className="global-nav__toggle">
                {showMenu ? "Close Menu" : "Open Menu"}
            </button>
            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;