import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Stocks from './Stocks';
import Search from './Search';


import Home from './Home';
import Tickers from './Tickers';
import Watchlists from './Watchlists';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Predict from './Predict';
import ChartCrosshair from './ChartCrossHair';

function App() {
  return (
    <div className="App">
    <div className="app__header">

    <div className="main">
     <h1> Stock Prediction App</h1>

       

     </div>
   
     </div>

     <Search/>


     <Router>
     <Navbar/>
     
     <Switch>
     <Route exact path="/">
 
     <Tickers/>
     
     </Route>
     <Route path="/watchlists">
     <Watchlists/>
    
     </Route>
     <Route path="/stock-predict">
     <Predict/>
     <ChartCrosshair/>
    
     </Route>
    
     
  
      </Switch>
 
      </Router>

    
    
   

   


     
    </div>
  );
}

export default App;
