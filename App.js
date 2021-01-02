import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {useState} from 'react'
import {Link, BrowserRouter as Router,Route, Switch} from "react-router-dom"
import {Nav} from './components/Nav'
import {About} from './components/About'
import {Index} from './components/Index'
import {ItemDetail} from './components/ItemDetail'


function App() {
  return (

    <div className="App">
        <Router>
          <Nav/>
          <Route exact path="/" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Router>






     
      
    </div>
  );
}

export default App;
