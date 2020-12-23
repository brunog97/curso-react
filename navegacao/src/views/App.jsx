import './App.css'
import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'


const App = props => (
    <div className="App">
    <Router>
        <Menu/>
        <Content/>
    </Router>
    </div>
)

export default App