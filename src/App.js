import Lukas from './components/Lukas'
import Radu from './components/Radu'
import AlexK from './components/AlexK'
import Alex from './components/Alex'
import Sian from './components/Sian'
import Footer from './components/Footer'
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactDOM } from 'react'

function App() {
  return (
    <>
      <Navbar />
      <Sian />
      <Radu />
      <AlexK />
      <Lukas />
      <Alex />
      <Footer />
    </>
  );
}

export default App;
