import './static/css/App.css';
import { useState } from 'react';
import Header from './functionalComponents/Header.jsx';
import Main from './functionalComponents/Main.jsx';
import Footer from './functionalComponents/Footer.jsx';



function App() {
  const [mainPage, setMainPage] = useState('/');
 



  function navClick(e) {
    e.preventDefault();
    const loadPage = e.target.getAttribute('href');
    setMainPage(loadPage);
  }


  function changePage(mainPage) {
    setMainPage(mainPage);
  }

  return (
    <div className="app">
      <Header navClick={navClick} className={"header"} />
      <a aria-label="Skip to main content" className="skip__link" href="#main" tabIndex="1">
        Skip to the main content
      </a>
      <Main page={mainPage} changePage={changePage} navClick={navClick} />
      <Footer navClick={navClick} className={"footer"} />
    </div>
  );
}

export default App;
