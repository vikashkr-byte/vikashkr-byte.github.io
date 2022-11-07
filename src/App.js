import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import GitHub_Calender from './Components/Github_calender/GitHub_Calender';
import Stats from './Components/stats/Stats';
import Intro from './Components/intro/Intro';
import About from './Components/about/About';
import ProductList from './Components/productList/ProductList';
import Contact_me from './Components/contact_me/Contact_me';
import Skills from './Components/skills/Skills';


function App() {
  return (
    <>
      <Navbar />
      {/* <AllRoutes /> */}
      <Intro />
      <About />
      <Skills />
      <GitHub_Calender />
      <Stats />
      <ProductList />
      <Contact_me />
    </>
  );
}

export default App;
