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
        particles: {
          number: {
            value: 90
          },
          color: {
            value: ["#C9A96E", "#8A9FE8", "#ffffff"]
          },
          links: {
            enable: true,
            distance: 130,
            color: "#3D4B8A",
            opacity: 0.12,
            width: 0.5
          },
          twinkle: {
            particles: { enable: true, frequency: 0.06, opacity: 0.9 }
          },
          move: {
            enable: true,
            speed: { min: 0.08, max: 0.35 },
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" }
          },
          opacity: {
            value: { min: 0.08, max: 0.55},
            animation: { enable: true, speed: 0.6, minimumValue: 0.05, sync: false }
          },
          size: {
            value: { min: 0.8, max: 2.8 },
            animation: { enable: true, speed: 1.2, minimumValue: 0.3, sync: false }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 120,
              links: { opacity: 0.28, color: "#C9A96E" }
            },
            push: {
              quantity: 4
            }
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
