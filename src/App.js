import './App.css';
import HeroSection from './components/pages/homepage/HeroSection';
import MyWorkSection from './components/pages/homepage/MyWorkSection';
import AboutMe from './components/pages/homepage/AboutMe';
import ContactMe from './components/pages/homepage/ContactMe';


function App() {
  return (
    <div className="container">
      <HeroSection/>
      <MyWorkSection/>
      <AboutMe/>
      <ContactMe/>
    </div>
  );
}

export default App;
