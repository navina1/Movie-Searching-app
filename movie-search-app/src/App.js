import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={<Header/>} />
    </Switch>
  </Router>
  );
}

export default App;
