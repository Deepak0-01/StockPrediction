import React from 'react'
import {BrowserRouter as Router ,Link,Route, Switch} from 'react-router-dom';

function Navbar() {
    return (
        <div style={{marginLeft:"14px"}} className="navlinks">

        <Link to="/" className="link" >Trending Stocks</Link>
        <Link to="/watchlists" className="link" >Watchlists</Link>
        <Link to="/summary" className="link" >Summary</Link>
        <Link to="/nifty-top_50" className="link" >Nifty Top 50</Link>
        
        </div>
    )
}

export default Navbar
