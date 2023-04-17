import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import { BrowserRouter as Router, Switch, Routes,Route } from "react-router-dom";

function App() {
  return (
    // setting up router
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home />}/>
        <Route exact path='/resources' element={<Resources/>}/>
      </Routes>
    </Router>
  );
}

export default App;
