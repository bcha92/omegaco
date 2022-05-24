import { Routes, Route } from 'react-router-dom';
import './stylesheets/App.scss';

// Components
import Navigation from './components/Navigation';
import Home from './components/Home';

// Main App
export default function App() {

  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}