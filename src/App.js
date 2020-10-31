import React from 'react';
import './App.css';
import './index.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppFooter from './Footer';
import Home from './Home';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

    

        <Router>
        <Nav/>
     
      
      
        <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/home"  component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />

        </Switch>

        </Router> 
        </div>
    <AppFooter />
    
    </div>
    
    

  );
}



export default App;
