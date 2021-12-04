import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {usePosts} from './custom-hooks/'
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Maps from './components/Maps';


function App() {  
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/:slug" component={Detail}/>
    </Switch>
  </Router>
  );
}

export default App;
