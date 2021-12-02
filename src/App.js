import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {usePosts} from './custom-hooks/'
import Navbar from './components/Navbar';


function App() {  
  return (
    <Router>
    <Navbar/>
    <Switch>
    </Switch>
  </Router>
  );
}

export default App;
