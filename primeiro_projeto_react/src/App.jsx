import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';

import Container from './components/pages/layout/Container';
import NavBar from './components/pages/layout/NavBar';
import Footer from './components/pages/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
