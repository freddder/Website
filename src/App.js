import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Experience from './pages/experience/Experience';
import About from './pages/about/About';

//import Carousel from './pages/Carousel';
//import bg from './assets/images/Path_of_Titans_Banner.jpg';
//import bg2 from './assets/images/PKM_Banner.png';
//const slides = [
//  {
//    title: 'Title 1',
//    background: bg,
//  },
//  { 
//    title: 'Title 2',
//    background: bg2,
//  },
//  { 
//    title: 'Title 3',
//    background: bg, 
//  },
//];

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
