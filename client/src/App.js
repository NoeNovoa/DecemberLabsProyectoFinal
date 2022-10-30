import './Css/App.css';
import Inicio from './Componentes/Inicio';
import Comidas from './Componentes/Comidas';
import Timeline from './Componentes/Timeline';
import Informes from './Componentes/Informes';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const initialState = [
  {id:0, text:"prueba"}
]


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

/*return (
    <div>
    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ): (
      backendData.users.map((user, i) =>(
        <p key={i}>{user} </p>
      ))
    )}
    </div>
  )*/ 
  const store = configureStore({reducer: rootReducer});
  return (
    <Provider store={store}>
      <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/Inicio" component={Inicio}/>
          <Route exact path="/Comidas" component={Comidas}/>
          <Route exact path="/Informes" component={Informes}/>
          <Route exact path="/Timeline" component={Timeline}/>
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default App