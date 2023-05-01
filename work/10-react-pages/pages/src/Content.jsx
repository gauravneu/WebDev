import './static/css/Content.css';
import content from './ContentPage';
function Content() {

    const item = content.map(c => {
        return (
            <div>
                <span className='content__heading'>{c.heading}</span>
                <p className='content__text'>{c.text}</p>
                <br />
            </div>
        )
    });

    return (
        <div className="content">
            {item}
        </div>
    );
}
export default Content;