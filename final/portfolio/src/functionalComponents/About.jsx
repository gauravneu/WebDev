import '../static/css/About.css'
import '../static/css/css-gg.css'
import Accordion from './Accordion';
import aboutContent from '../static/javascripts/aboutContent';
import Button from './Button';
function About({ navClick }) {

    const items = aboutContent.map(aboutSection => {
        return (
            <div className="card" key={aboutSection.source}>
                <img className="card__pic" src={aboutSection.source} alt={aboutSection.alt} />
                <h2 className="card__title">{aboutSection.title}</h2>
                <div className="card__data">
                    <div>{aboutSection.content}</div>
                </div>
                {
                    aboutSection.buttonRef.length > 0 &&
                    <Button className="card__link" onClick={navClick}
                        title={aboutSection.buttonTitle} href={aboutSection.buttonRef} ariaLabel={aboutSection.ariaLabel}
                    />
                }
            </div>
        );
    });

    return (
        <>
            <div className="cards">
                {items}
            </div>
            <Accordion></Accordion>
        </>
    );
}

export default About;