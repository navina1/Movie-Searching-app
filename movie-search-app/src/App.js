import logo from './logo.svg';
import './App.css';
//import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Header = lazy(() => import('./Components/Header'))

function App() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
