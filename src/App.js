import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Projetos from './components/Projetos/Projetos';
import Sobre from './components/Sobre/Sobre';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Sobre />
            </Route>
    
            <Route exact path='/Projetos'>
              <Projetos />
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
