import './static/css/Main.css';
import Button from './Button';
import Modal from './Modal';
function Main(className){
    return(
        <div className='main'>
           <Button children = {`You just clicked a Link`} title={`Button1`} visual={`link`} type={`button`}/>
           <Button children = {`You just clicked a Button`} title={`Button1`} visual={`button`} type={`button`}/>
           <Modal/>
        </div>
    )
}

export default Main;