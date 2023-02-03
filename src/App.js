import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Stats from './components/stats/Stats';
import ProductList from './components/productList/ProductList';
import GitHub_Calender from './components/Github_calender/GitHub_Calender';
import Contact_me from './components/contact_me/Contact_me';

function App() {
  return (
    <>
      <Header />
      <main className='main' >
        <Home />
        <About/>
        <Skills/>
        <Stats/>
        <GitHub_Calender/>
        <ProductList/>
        <Contact_me/>
      </main>

    </>
  );
}

export default App;
