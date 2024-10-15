import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import ClassComponentExample from './Component/ClassComponent';
import FunctionComponentExample from './Component/FunctionComponent';
import DarkModeContextProvider from './Context/DarkMode';
import FormValidation from './Component/FormValidation';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/class-component">Class</Link>
          </li>
          <li>
            <Link to="/function-component">Function</Link>
          </li>
          <li>
            <Link to="/form-validation">Form</Link>
          </li>
        </ul>
      </nav>
    <DarkModeContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class-component" element={<ClassComponentExample />} />
        <Route path="/function-component" element={<FunctionComponentExample />} />
        <Route path="/form-validation" element={<FormValidation />} />
      </Routes>
    </DarkModeContextProvider>
    </Router>
  );
};

export default App;
