/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
//import MyImage from './imgs/capture.jpg';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Content from './component/Content';
//import Catagory from './component/Catagory';

function App(){

  // const menus = () => {
    
  // }

  return(

    // <div>
    //     <h1 className="App">Hello world</h1>
    //     <p>This is my 5+5 paragraph</p>
    //     <img src={MyImage} alt=""/>
    //     <input type="text"/>
    // </div>
    
      <>

       <Navbar/>
          <h1>hi jenkins</h1>
          <p>Heloo</p>
          <Content/>
       <Footer/>

      </>
      
  );
}

export default App;
