import React from 'react';
import NavBar from './components/Nav_bar';
import Footer from './components/Footer';
import Routes from './pages/Routes';
import './styles/__main__.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
