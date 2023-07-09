import { Routes, Route } from 'react-router-dom';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';
import Home from 'js/pages/Home';
import About from 'js/pages/About';
import Contact from 'js/pages/Contact';
import Disclaimer from 'js/pages/Disclaimer';
import NotFound from 'js/pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path='*' element={<NotFound />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
