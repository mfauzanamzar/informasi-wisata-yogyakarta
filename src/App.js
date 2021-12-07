import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListWisata from './pages/ListWisata';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}/>
        <Route path="/wisata" component={ListWisata}/>
        <Route path="/maps" component={Location} />
        <Route path="/:slug" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
