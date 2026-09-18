import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="*" element={<p>Pagina non trovata</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
