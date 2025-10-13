import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import About from './pages/about/About';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
