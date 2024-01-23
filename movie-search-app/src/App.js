import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={<Header/>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Switch>
  </Router>
  );
}

export default App;
