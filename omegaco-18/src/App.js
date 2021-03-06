import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navigation from './Navigation';
import Content from "./components/Content";

// Data
import DATA from "./assets/data.json";

export default function App() {
  const [ botIndex, setBotIndex ] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {Object.keys(DATA).map(data => (
        <Route
          key={data}
          // Exception to HomePage path as "/"
          exact={data === "home" ? true : false}
          path={data === "home" ? "/" : data}
          element={<Content
            img={DATA[data].img}
            info={DATA[data].info}
            rate={DATA[data].rate}
            bot={data === "home"}
            phrases={DATA[data].phrases}
            contact={data === "contact"}
            botIndex={botIndex}
            setBotIndex={setBotIndex}
          />}
        />))}
      </Routes>
    </div>
  );
}