import photo1 from './01.png';
import photo2 from './02.png';

const photos = [photo1, photo2];

const ParticlesConf = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    // "color": {
    //     "value": "#ffffff"
    // },
    shape: {
      type: ['image'],
      // "stroke": {
      //     // "width": 1,
      //     // "color": "#d823e3"
      // },
      // "polygon": {
      //     "nb_sides": 16
      // },
      image: {
        src: photos[Math.floor(Math.random() * photos.length)],
        width: 23,
        height: 30
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 4,
        sync: false
      }
    },
    line_linked: {
      enable: false
      // "distance": 189.3984232581264,
      // "color": "#084f5f",
      // "opacity": 0.2683144329490124,
      // "width": 0.946992116290632
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  // interactivity: {
  //   detect_on: 'window',
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: 'repulse'
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: 'push'
  //     },
  //     resize: true
  //   },
  //   modes: {
  //     grab: {
  //       distance: 400,
  //       line_linked: {
  //         opacity: 1
  //       }
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 8,
  //       speed: 3
  //     },
  //     repulse: {
  //       distance: 100,
  //       duration: 0.4
  //     },
  //     push: {
  //       particles_nb: 4
  //     },
  //     remove: {
  //       particles_nb: 2
  //     }
  //   }
  // },
  retina_detect: false
};

export default ParticlesConf;
