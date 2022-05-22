
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
// import Prac from './Prac'
// import About from './About';
import News from './News';
// import Usecon from './Usecon'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export class App extends Component {
 


  render() {
    return (
      <div>
 

        <Navbar/>
       <Router>
                <Routes>
                    <Route exact path="/" element={<News pageSize={5} country="in"  catagory="general" />} />
                    <Route path="/health" element={ <News pageSize={5} country="in"  catagory="health" />} />
                    <Route path="/entertainment" element={ <News pageSize={5} country="in"  catagory="entertainment" />} />
                    <Route path="/sports" element={ <News pageSize={5} country="in"  catagory="sports" />} />
                </Routes>
    </Router> 

      </div>
    )
  }
}

export default App