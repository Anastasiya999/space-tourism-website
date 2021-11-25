import {BrowserRouter,Route, Switch,Routes, useLocation} from 'react-router-dom';
import { useEffect } from "react";
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';
import './styles/App.scss';
import Header from './layout/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destination" >
          <Destination/>
          </Route>
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
