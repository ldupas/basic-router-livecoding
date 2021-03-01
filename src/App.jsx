import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
