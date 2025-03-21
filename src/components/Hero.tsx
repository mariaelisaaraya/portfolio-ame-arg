import { motion } from "framer-motion";

const skills = [
  "Angular",
  "Next.js",
  "React",
  "Node.js",
  "Golang",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Figma",
  "UX/UI",
  "GitHub",
  "GitLab",
];

export function Hero() {
  return (
    <section className="text-center py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/42949801?v=4"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <motion.span
          className="inline-block bg-green-500/10 text-green-500 px-4 py-1 rounded-full text-sm cursor-pointer"
          whileHover={{
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            scale: 1.05,
          }}
        >
          Disponible para Trabajar
        </motion.span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Desarrolladora FullStack
      </h1>
      <p className="text-gray-400 mb-12">
        Mi nombre es <span className="text-white">María Elisa Araya</span>,
        tengo experiencia en UX/UI, BackEnd y FrontEnd.
        <br />
        Diseño y construyo productos digitales sólidos centrados en la persona
        usuaria.
      </p>

      <div className="flex justify-center gap-8 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 text-sm text-gray-400"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
