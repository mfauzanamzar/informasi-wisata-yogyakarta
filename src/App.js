import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Location from './pages/Location';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/maps" component={Location} />
        <Route path="/:slug" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
