import '../static/css/Footer.css';
import Button from './Button';
import footerProjects from '../static/javascripts/footer';


function Footer({ navClick }) {


  const footerProject = footerProjects.map(footerProjects => {
    return (
      <Button
        key={footerProjects.name}
        className="footer__links--click"
        onClick={navClick}
        title={footerProjects.name}
        href={footerProjects.path}
        ariaLabel={footerProjects.ariaLabel}
      />
    );
  });

  return (
    <footer className="footer">
      <div className='footer__endOfFile' >
        You have reached at the End of The Page
      </div>
      <div className='footer__links'>
        {footerProject}
      </div>
          
      <Button className={`contactMe__link`}
        onClick={navClick}
        title={`Contact Me`}
        href='./contactMe.html'
        ariaLabel={`Click here to send message to Gaurav`} />


    </footer>
  );
}

export default Footer;
