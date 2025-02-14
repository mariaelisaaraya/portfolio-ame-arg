import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ContactButton } from "../components/ContactButton";

export function ProjectDetail2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#111111] text-white pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-8"
      >
        <div className="flex justify-between items-center mb-8">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} />
            Volver a proyectos
          </motion.button>
          <ContactButton />
        </div>

        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">[YPF - Ingenias]</h1>
            <p className="text-gray-400">
              Formación en desarrollo backend con enfoque práctico y
              colaborativo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">El Desafío</h2>
              <p className="text-gray-400">
                Diseñar un espacio de aprendizaje donde mujeres de diferentes
                edades pudieran desarrollar habilidades en Backend,
                comprendiendo desde servidores y bases de datos hasta testing y
                documentación.
              </p>
              <p className="text-gray-400">
                Más allá de lo técnico, el curso fomentó el trabajo en equipo,
                la autonomía en la resolución de problemas y la confianza en el
                desarrollo de proyectos reales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Mi Rol</h2>
              <p className="text-gray-400">
                Como mentora, guié a las alumnas a lo largo del curso,
                explicando conceptos clave y asegurando que cada una pudiera
                aplicar los conocimientos en ejercicios y proyectos reales.
              </p>
              <p className="text-gray-400">
                Destacando la importancia de la comunidad y el aprendizaje
                colaborativo, brindé acompañamiento personalizado, promoviendo
                el pensamiento crítico y la autonomía en la resolución de
                problemas.
              </p>
            </div>
          </div>

          <div className="w-full text-center mt-12">
            <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
            <p className="text-gray-400">
              🚀 Más de 30 alumnas completaron el curso con proyectos
              funcionales, integrando bases de datos y APIs.
              <br />
              💡 Se promovió la confianza y la autonomía en el desarrollo de
              código y trabajo en equipo.
              <br />
              🤝 Una comunidad activa que sigue colaborando y aprendiendo más
              allá del curso.
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com/mariaelisaaraya/ingenias-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              GitHub 2023
            </a>
            <a
              href="https://github.com/mariaelisaaraya/tareasIngeniasAlumnas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              GitHub 2024
            </a>
            <a
              href="https://www.linkedin.com/posts/arayamariaelisa_hola-linkedin-hoy-estamos-de-celebraci%C3%B3n-activity-7227799194906816512-LsXq?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              Post LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
