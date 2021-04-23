import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Particles from 'react-particles-js';
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:4,
                color:"rgb(247, 54, 6)"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
