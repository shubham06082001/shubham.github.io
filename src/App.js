import { useState } from 'react';

import './App.scss';

import Particles from 'react-particles-js';

import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import TopBar from './components/TopBar/TopBar';
import Works from './components/Works/Works';
import Menu from './components/Menu/Menu';

function App() {
  const particleOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: '',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 60,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000,
        },
      },
      array: [],
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
      mouse: {},
    },
    retina_detect: true,
    fn: {
      interact: {},
      modes: {},
      vendors: {},
    },
    tmp: {},
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='app'>
        <Particles params={particleOptions} className='particles' />
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='sections'>
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
