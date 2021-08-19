import React from 'react'
import './App.css';

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Cursos from '../cursos/cursos.jsx'

import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>

      <Header />
      <main>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/Cursos" render = {(props) => <Cursos/>}></Route>

        </Switch>
      </BrowserRouter>
      </main>
      
    </div>
  );
}

export default App;