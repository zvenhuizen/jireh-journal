import './styles/App.css';
import React from 'react'
import './styles/App.css'
import Router from './components/router/Router'
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Router />
      </div>
      
    )
  }
}

export default App;
