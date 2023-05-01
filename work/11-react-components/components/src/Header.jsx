import Cat1 from './static/images/Cat1.jpg'
import './static/css/Header.css';
function Header(){
    return(
        <div className="header">
            <img className='header__logo' src={Cat1} alt='cat behind sofa'/>
            <div className='header__title'>React Component Assignment</div> 
        </div>
    );
}

export default Header;