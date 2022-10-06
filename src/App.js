import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';




function App() {
  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact='true' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
      <Footer />

    </Router>


  );
}

export default App;