import './static/css/Cards.css';
import cardsinfo from './cardsinfo';
const linkClick = 'About';


function Cards() {


    const list = cardsinfo.map(cards => {
        return (
            <div className="card">
                <h2 className="card__title">{cards.title}</h2>
                <img className="card__pic"
                    src={cards.addr}
                    alt={cards.alt} />
                <div className="card__text">Click here to{` `} 
                    <a href={cards.path} className='card__btn'
                        onClick={linkClick} >{cards.bttn}</a>
                </div>
            </div>
        );
    });


    return (
        <div className="cards">
            {list}
        </div>
    );
}

export default Cards;