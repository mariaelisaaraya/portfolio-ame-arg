import { motion } from "framer-motion";
import { Briefcase, Code2, Palette } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Briefcase size={24} />,
      value: "5",
      label: "Años de Experiencia",
    },
    { icon: <Code2 size={24} />, value: "30", label: "Proyectos Completados" },
    {
      icon: <Palette size={24} />,
      value: "∞",
      label: "Ganas de seguir Aprendiendo",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-20 py-12" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Sobre mi</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/42949801?v=4"
              alt="Me working"
              className="rounded-lg w-full h-auto md:h-[430px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-400">
              Hola, mi nombre es María Elisa pero en el mundo de Sistemas me
              dicen Lisa, desarrolladora frontend y entusiasta de la innovación
              tecnológica. Con experiencia en React, Next.js y Web3, me
              especializo en crear interfaces optimizadas, accesibles y
              dinámicas que brindan experiencias fluidas y envolventes.
            </p>

            <p className="text-gray-400">
              Mi enfoque combina diseño y funcionalidad, asegurando que cada
              proyecto no solo sea visualmente atractivo, sino también eficiente
              y escalable. He trabajado en proyectos que van desde plataformas
              educativas hasta integraciones con blockchain, siempre priorizando
              la experiencia del usuario.
            </p>

            <p className="text-gray-400">
              Cuando no estoy programando, me vas a encontrar explorando nuevas
              tecnologías, investigando sobre blockchain y AI, practicando
              jiu-jitsu o colaborando en iniciativas que fusionan creatividad y
              tecnología.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
