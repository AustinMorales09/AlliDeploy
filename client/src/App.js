//import './App.css';
import React, { Component } from 'react';
import Contact from './contact';
import About from './About';
import './App.css';
// IMPORTS BELOW ARE FOR WEATHER APP 
//import 'weather-icons/css/weather-icons.css';
// IMPORTS ABOVE ARE FOR WEATHER APP ^
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'; //Include Footer
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';



import {BrowserRouter as Router, Route} from 'react-router-dom';
import Attractions from './Viewattra';
import addAttract from './addAttract';
import Burger from './components/Burger';
import SingleAttraction  from './singleatt';




class App extends Component {
  
  
  render() {
    return (
     <Router>
      <div className="maincontainer">
        { <Burger/> } 

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/Contact' component ={Contact}/>
        <Route exact path='/attractions' component ={Attractions}/>        
        <Route exact path ='/add' component= {addAttract}/>
        <Route path = '/attractions/:id' component={SingleAttraction}/>
       




        
      {/* </div> */}
        <Footer />
      </div>
    </Router>

   
   )}
}







export default App;
