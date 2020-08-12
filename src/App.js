import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Info from './components/Main/Info/Info';
import Judges from './components/Main/Judges/Judges';
import Form from './components/Main/Form/Form';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Rules from './components/Main/RulesPage/Rules';
import Organizers from './components/Main/organizers/Organizers';

function App() {
  return (
   <Router> 
    <div className="App">
        <Header />
        <main >
        <Switch>
          <Route exact path="/">
            <Info />
            <Judges />
            <Organizers />
            <Form />
          </Route>
          <Route exact path="/rules">
            <Rules />
          </Route>
        </Switch>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
