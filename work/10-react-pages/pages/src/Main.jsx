import Content from "./Content";
import Panels from "./Panels";
import Cards from "./Cards";


function Main({ page, setPage }) {

    const ren = (page === 'Cats') ? <Cards /> :
        (page === 'About') ? <Panels />
            : <Content />

    return (
        <main>
            {ren}
        </main>
    );
}
export default Main;