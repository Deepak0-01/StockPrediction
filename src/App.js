import React from 'react';
import logo from './logo.svg';

import './App.css';
import Stocks from './Stocks';
import Search from './Search';


import Home from './Home';
import Tickers from './Tickers';
import Watchlists from './Watchlists';
import {BrowserRouter as Router ,Link,Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Predict from './Predict';
import ChartCrosshair from './ChartCrossHair';
import Summary from './Summary';
import Nifty from './Nifty';
import PredictionPage from './prediction/PredictionPage';
import StockLineChart from './prediction/StockLineChart';
import TweeterSentiment from './Sentiment/TweeterSentiment';
import Feedback1 from './Sentiment/Feedback1';

function App() {
  return (
    <div className="App">
    <div className="app__header">

    <div className="main" >
     <h2  style={{marginLeft:"180px"}}> Stockify</h2>

     <div style={{display:"flex",justifyContent:"space-around",color:"aliceblue"}}>

    
     
     </div>

       

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
     <Route path="/summary">
     <Summary/>
    
     </Route>
     <Route path="/nifty-top_50">
     <Nifty/>
    
     </Route>

     <Route path="/predict">
  <PredictionPage/>

    
     </Route>

     <Route path="/sentiment">
    <Feedback1/>
   
       
        </Route>
    
     
  
      </Switch>
 
      </Router>

    
    
   

   


     
    </div>
  );
}

export default App;
