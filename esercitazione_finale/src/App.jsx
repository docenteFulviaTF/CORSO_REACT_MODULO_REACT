import {Routes, Route} from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cerca from './pages/Cerca.jsx';
import Home from './pages/Home.jsx';
import Libreria from './pages/Libreria.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/cerca" element={<Cerca />} />
        <Route path="/" element={<Home />} />
        <Route path="/libreria" element={<Libreria />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
