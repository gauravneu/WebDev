import { useRef } from 'react';
import Button from './Button';
function Demo() {
    const dialogRef = useRef();
    return (
        <>
            <Button click={() => dialogRef.current.showModal()} children={`Modal Opened or Closed`} title={`Modal`} visual={`link`} type={`submit`} />
            <dialog ref={dialogRef}>
                Modal Contant is Opened
                <Button click={() => dialogRef.current.close()} title={`Close`} visual={`link`} type={`submit`} />
            </dialog>
        </>
    )
}

export default Demo;