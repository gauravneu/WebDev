import './static/css/Footer.css';
import Button from './Button';
function Footer(className){
    return(
        <div className='footer'>
            <Button children = {`You have no Privacy`} title={`Privacy`} visual={`link`} type={`button`}/>
        </div>
    )
}

export default Footer;