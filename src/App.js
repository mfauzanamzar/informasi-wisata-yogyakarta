import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListWisata from './pages/ListWisata';
import Footer from './components/Footer';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/wisata" component={ListWisata}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
