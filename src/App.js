import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './pages/About'
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavTabs from './pages/NavTabs';

function App() {
  return (
    <Router>
      <div className="content">
        <NavTabs/>
        <Switch>
          <Route exact path="/React-Portfolio" component={About}/>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
