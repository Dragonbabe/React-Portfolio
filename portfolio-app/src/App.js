import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import About from './components/pages/About.js'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="content">
        <Header />
        <Route exact path="/" component={About} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
