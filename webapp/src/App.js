import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReservationMaker from './Components/ReservationMaker';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/reservation" component={ReservationMaker} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
