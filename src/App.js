import React from 'react';
import * as History from 'history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Transfer from "./Containers/Transfer";

const history = History.createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <>Index</>
        </Route>
        <Route exact path="/home">
          <>Home</>
        </Route>
        <Route exact path="/back">
          <>Back</>
        </Route>
        <Route exact path="/transfer">
          <Transfer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
