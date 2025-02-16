import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Palette } from "lucide-react";

export function About() {
  const [animalIndex, setAnimalIndex] = useState(0);
  const [posicionesAnimales, setPosicionesAnimales] = useState<
    { top: string; left: string }[]
  >([]);

  const stats = [
    { icon: <Briefcase size={24} />, value: "5", label: "Años de Experiencia" },
    { icon: <Code2 size={24} />, value: "30", label: "Proyectos Completados" },
    {
      icon: <Palette size={24} />,
      value: "∞",
      label: "Ganas de seguir Aprendiendo",
    },
  ];

  const animales = [
    { src: "/Aquiles.PNG", alt: "Aquiles que se duerme" },
    { src: "/Zoe.PNG", alt: "Zoe mirando sin mucho interés" },
    { src: "/Lola.PNG", alt: "Lola haciendo su carita" },
    { src: "/Renata.PNG", alt: "Renata disfrutando del sol" },
  ];

  const agregarAnimal = () => {
    if (animalIndex < animales.length) {
      setPosicionesAnimales((prev) => [
        ...prev,
        {
          top: `${Math.random() * 80}vh`,
          left: `${Math.random() * 80}vw`,
        },
      ]);
      setAnimalIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 py-12 relative" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Sobre mí</h2>

        <div className="space-y-6">
          <p className="text-gray-400">
            Hola, mi nombre es María Elisa pero en el mundo de Sistemas me dicen
            Lisa, desarrolladora frontend y entusiasta de la innovación
            tecnológica. Con experiencia en React, Next.js y Web3, me
            especializo en crear interfaces optimizadas, accesibles y dinámicas
            que brindan experiencias fluidas y envolventes.
          </p>

          <p className="text-gray-400">
            Mi enfoque combina diseño y funcionalidad, asegurando que cada
            proyecto no solo sea visualmente atractivo, sino también eficiente y
            escalable. He trabajado en proyectos que van desde plataformas
            educativas hasta integraciones con blockchain, siempre priorizando
            la experiencia del usuario.
          </p>

          <p className="text-gray-400">
            Cuando no estoy programando, me vas a encontrar explorando nuevas
            tecnologías, investigando sobre blockchain y AI, practicando
            jiu-jitsu o colaborando en iniciativas que fusionan creatividad y
            tecnología.
          </p>

          <p className="text-gray-400">
            También me encanta estar con mis{" "}
            <span
              className="text-[#FF4500] font-semibold cursor-pointer hover:underline"
              onClick={agregarAnimal}
            >
              ANIMALES 🐾
            </span>
            .
          </p>
        </div>

        {posicionesAnimales.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-center mt-8">
              Mis Compañeros Peludos 🐶
            </h3>
            {posicionesAnimales.map((pos, index) => (
              <motion.img
                key={index}
                src={animales[index].src}
                alt={animales[index].alt}
                className="rounded-lg shadow-md absolute border-4 border-orange-500 cursor-grab"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: window.innerWidth - 100,
                  bottom: window.innerHeight - 100,
                }}
                style={{
                  position: "absolute",
                  top: pos.top,
                  left: pos.left,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg block mx-auto hover:bg-red-600 transition"
              onClick={() => {
                setAnimalIndex(0);
                setPosicionesAnimales([]);
              }}
            >
              Mandarlos a la cucha 🛏️
            </button>
          </>
        )}

        {/* 📊 Sección de estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900/50 rounded-lg"
            >
              <div className="mb-4 flex justify-center text-[#FF4500]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
