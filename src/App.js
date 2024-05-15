import React from 'react';
import NavBar from './components/Nav_bar';
import Footer from './components/Footer';
import Routes from './pages/Routes';

function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


function App() {
  return (
    <div className="App">
      <NavBar />
      {ScrollToTopOnMount}
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
