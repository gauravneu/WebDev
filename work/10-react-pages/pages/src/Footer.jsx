import './static/css/Footer.css';
import footmenu from './Footermenu';

function Footer() {

    const item = footmenu.map(menu => {
        return (
            <li className='footer__place-item' key={menu.name}>
                <a className='footer__place-link' href={menu.path}>
                    {menu.name}
                </a>
            </li>
        )
    });

    return (
        <footer className='footer'>
            <ul className='footer__place-list'>
                {item}
            </ul>
        </footer>
    );
}

export default Footer;