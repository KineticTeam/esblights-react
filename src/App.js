import { Routes, Route } from 'react-router-dom';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';
import Home from 'js/pages/Home';
import About from 'js/pages/About';
import Contact from 'js/pages/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/empirestatebuildingcolors-react/" element={<Home />} />
        <Route exact path="/empirestatebuildingcolors-react/about" element={<About />} />
        <Route exact path="/empirestatebuildingcolors-react/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
