import '../static/css/Main.css';
import About from "./About";
import Education from './Education';
import Projects from './Projects';
import Register from './Register';
function Main({ page, navClick }) {
    return (
        <main id="main" className={`main`}>
            {(page === '/') && <About navClick={navClick} />}
            {(page === '/education.html') && <Education />}
            {(page === '/hcl.html' ||
                page === '/infosys.html' ||
                page === '/insurancePlan.html' ||
                page === '/disasterRelief.html') && <Projects pageNameToLoad={page} />}
            {(page === './contactMe.html') && <Register />}
        </main>
    );
}

export default Main;