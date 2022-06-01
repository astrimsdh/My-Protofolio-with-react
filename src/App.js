import profil from './profil.png';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectPertama from './dist/img/portfolio/1.png';
import ProjectKedua from './dist/img/portfolio/2.png';
import Clients from './components/Clients';
import LogoGoogle from './dist/img/logo/Google.svg';
import LogoGojek from './dist/img/logo/Gojek.svg';
import LogoTokopedia from './dist/img/logo/Tokopedia.svg';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {



  
  const HumbergerClick = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  }

  window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

  return (
    
    <div>
      <Navbar HumbergerClick={HumbergerClick} />
      <Home profil={profil} />
      <About />
      <Portfolio ProjectPertama={ProjectPertama} ProjectKedua={ProjectKedua}/>
      <Clients LogoGoogle={LogoGoogle} LogoGojek={LogoGojek} LogoTokopedia={LogoTokopedia}/>
      <Blog />
      <Contact />
      <Footer />
    </div>
    
    );
}

export default App;
