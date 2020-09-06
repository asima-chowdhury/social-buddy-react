import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts/:id">
          <PostDetail/>
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
