import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/company">Companhia</Link></li>
          <li><Link to="/newproject">Novo Projeto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      <footer>
        <p>Footer</p>
      </footer>
    </Router>
  );
}

export default App;
