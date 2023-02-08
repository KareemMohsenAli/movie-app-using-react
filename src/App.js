
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Movies from './pages/Home';
import Show from './pages/Show';
import Favorite from './pages/Favorite';


function App() {
  return (
  <div className=''>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path={"/"} component={Movies}/>
      <Route exact path={"/about/:id"} component={Show}/>
      <Route exact path={"/Favorite"} component={Favorite}/>
    </Switch>
    </BrowserRouter>

  </div>
  );
}

export default App;
