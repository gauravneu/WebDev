import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './static/css/App.css';
import { useState } from 'react';



function App() {
  const [page, setPage] = useState('Home');
  return (
    <div className="app">
        <Header setPage = {setPage}/>
        <Main page={page} setPage={setPage}/>
        <Footer/>
    </div>
  );
}

export default App;
