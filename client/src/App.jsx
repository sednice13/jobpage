import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Component } from 'react';
import Menu from './components/Menu';
import Landing from './components/Landing';


const Layout = () => {
  const location = useLocation();
  
  return (
    <div className='fullsite'>
    
      {location.pathname !== '/' && <Menu />}
      <Routes>
        <Route path='/' exact element={<Landing/>} />
        
      </Routes>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
