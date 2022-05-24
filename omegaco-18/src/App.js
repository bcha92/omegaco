import { Routes, Route } from 'react-router-dom';
import './stylesheets/App.scss';

// Components
import Navigation from './Navigation';
import Home from './components/Home';
import What from './components/What';
import Why from './components/Why';
import Rates from './components/Rates';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="what" element={<What />} />
        <Route path="why" element={<Why />} />
        <Route path="rates" element={<Rates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}