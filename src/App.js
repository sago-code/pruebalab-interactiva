import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import { Fragment } from 'react';

function ProtectedLayout({children}) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
            <Route exact path="/" element={
              <ProtectedLayout>
                <Home />
              </ProtectedLayout>
            } />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
