import '../static/css/Education.css'
import education from '../static/javascripts/education';
import Accordion from './Accordion';
function Education(){
    return(
        <>
        <div className="panel">
            <div className="panel__right">
                <img className="panel__pic__right" src={education[0].source} alt={education[0].alt} />
                <h2 className="panel__title">{education[0].title}</h2>
                <div className="panel__text">{education[0].text}</div>
            </div>
            <div className="panel__left">
                <img className="panel__pic__left" src={education[1].source} alt={education[1].alt} />
                <div className="panel__area">
                    <h2 className="panel__title">{education[1].title}</h2>
                    <div className="panel__text">{education[1].text}</div>
                </div>
            </div>
            <div className="panel__right">
                <img className="panel__pic__right" src={education[2].source} alt={education[2].alt} />
                <h2 className="panel__title">{education[2].title}</h2>
                <div className="panel__text">{education[2].text}</div>
            </div>
            <div className="panel__left">
                <img className="panel__pic__left" src={education[3].source} alt={education[3].alt} />
                <div className="panel__area">
                    <h2 className="panel__title">{education[3].title}</h2>
                    <div className="panel__text">{education[3].text}</div>
                </div>
            </div>
        </div>
        <Accordion></Accordion>
        </>
    );
}
export default Education;