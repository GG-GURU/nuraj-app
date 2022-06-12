import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Birthday from './Birthday'
import Navbar from './Navbar'
import Todolist from './Todolist';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Birthday" component={Birthday} />
          <Route exact path="/Todolist" component={Todolist} /> 
        </Switch>
      </Router>
    </div>
  )
}

export default App