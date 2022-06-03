import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navigation from './Navigation';
import Content from "./components/Content";

// Data
import DATA from "./assets/data.json";

export default function App() {
  const [ botIndex, setBotIndex ] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {Object.keys(DATA).map(data => (
            <Route
              key={data}
              exact={data === "home"}
              path={data === "home" ? "/" : `/${data}`}
            >
              <Content
                img={DATA[data].img}
                info={DATA[data].info}
                rate={DATA[data].rate}
                bot={data === "home"}
                phrases={DATA[data].phrases}
                contact={data === "contact"}
                botIndex={botIndex}
                setBotIndex={setBotIndex}
              />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}