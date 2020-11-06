import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Component/navbar/navbar';
import Home from './Component/Home/home';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='wrapper mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='container'>
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                           </Switch>
                        </div>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;