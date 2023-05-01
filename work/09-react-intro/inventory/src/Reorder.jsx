import './Reorder.css';

function Reorder({ onReorder }) {
    return(
    <>
       <button className="blur button" onClick={onReorder}>Reorder</button>
    </>
    );
    }

    export default Reorder;