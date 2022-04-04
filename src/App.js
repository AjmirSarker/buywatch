
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews'
import DashBoard from './components/DashBoard/DashBoard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';



function App() {
  return (
    <div className="">
     
      <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route> 
     <Route path='/about' element={<About></About>}></Route>
    
     <Route path='*' element={<NotFound></NotFound>}></Route>
   </Routes>
    </div>
  );
}

export default App;
