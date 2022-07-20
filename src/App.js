import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/HomePage';
import MyWorkPage from './components/pages/mywork/MyWorkPage';
import AboutmePage from './components/pages/aboutme/AboutmePage';
import ContactmePage from './components/pages/contactme/ContactMePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/mywork' element={<MyWorkPage/>}/>
      <Route path='/aboutme' element={<AboutmePage/>}/>
      <Route path='/contact' element={<ContactmePage/>}/>
    </Routes>
  );
}

export default App;
