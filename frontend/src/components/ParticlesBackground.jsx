import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";



function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "#060725"
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              mix: false,
              opacity: 8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: {}
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        particles: {
          number: {
            value: 80
          },
          color: {
            value: "#ffffff"
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150
          },
          move: {
            enable: true,
            speed: 2
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min:1, max:3 }
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
