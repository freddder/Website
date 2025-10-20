import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import About from './pages/about/About';
import Professional from './pages/professional/Professional';
import Personal from './pages/personal/Personal';
import PathOfTitans from './pages/professional/PathOfTitans';
import Magik from './pages/personal/Magik';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/professional' element={<Professional/>}/>
            <Route path='/personal' element={<Personal/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/pot' element={<PathOfTitans/>}/>
            <Route path='/magik' element={<Magik/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
