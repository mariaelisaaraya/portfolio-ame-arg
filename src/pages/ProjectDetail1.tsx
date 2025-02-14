import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ContactButton } from "../components/ContactButton";
//import defiwise1 from "../public/defiwise1.png";
import defiwise2 from "../public/defiwise2.png";
import defiwise3 from "../public/defiwise3.png";

export function ProjectDetail1() {
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
            <h1 className="text-4xl font-bold mb-4">DefiWise</h1>
            <p className="text-gray-400">
              DeFiWise revolucionó la educación financiera al integrar
              tecnología blockchain y gamificación, ganando el 1er puesto en la
              Latina Blockchain Hackathon 2024 y siendo reconocida por la
              adopción del protocolo ENS.
            </p>
          </div>

          <motion.img
            //src={defiwise1}
            alt="Defiwise Project"
            className="w-full rounded-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          />

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">El Desafío</h2>
              <p className="text-gray-400">
                Objetivo Educativo y de Engagement: Diseñar una plataforma web
                intuitiva y atractiva para enseñar finanzas personales,
                inversiones y DeFi, con módulos interactivos, UI responsiva y
                mecánicas de gamificación para mejorar la retención.
              </p>
              <p className="text-gray-400">
                Experiencia de Usuario e Integración Web3: Implementar
                certificados de finalización en forma de NFTs y facilitar la
                interacción con blockchain mediante una interfaz accesible e
                integrada con ENS.
              </p>
              <p className="text-gray-400">
                Tecnología Frontend: Utilizar Next.js para optimizar el
                rendimiento y mejorar la experiencia del usuario, con
                animaciones fluidas y carga dinámica de contenido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">La Solución</h2>
              <p className="text-gray-400">
                Investigación y Diseño: Con el equipo realizamos un análisis de
                UX/UI con prototipos en Figma, priorizando accesibilidad y
                engagement visual.
              </p>
              <p className="text-gray-400">
                Desarrollo Frontend con Next.js: La plataforma se construyó con
                Next.js. Se implementaron módulos educativos interactivos con un
                diseño gamificado.
              </p>
              <p className="text-gray-400">
                Integración Web3 desde el Frontend: Se desarrolló la conexión
                con contratos inteligentes a través de una interfaz optimizada,
                facilitando la emisión de NFTs como certificados de
                finalización.
              </p>
              <p className="text-gray-400">
                Optimización UX: Se incorporaron microinteracciones y mejoras en
                la accesibilidad, asegurando una experiencia envolvente para el
                usuario.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.img
              src={defiwise2}
              //{certificate}
              alt="defiwise2"
              className="w-full h-[300px] object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src={defiwise3}
              alt="defiwise3"
              className="w-full h-[300px] object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
            />
          </div>

          <div className="w-full text-center mt-12">
            <h2 className="text-2xl font-semibold mb-4">Resultados</h2>
            <p className="text-gray-400">
              1er Puesto en Latina Blockchain Hackathon 2024:
              <br />
              La innovación y ejecución de DeFiWise fueron reconocidas en este
              prestigioso evento, organizado por Women Biz en mayo 2024.
              <br />
              Premio por Adopción del Protocolo ENS
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com/mariaelisaaraya/web3wonderwomen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://defiwise.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              Página Web
            </a>
            <a
              href="https://www.figma.com/proto/FSYrGPNyZNgE7S85ovTwvq/DeFiWise---MVP-Design?node-id=332-4136&t=B7FX46V9KppfFf3m-0&scaling=scale-down&content-scaling=fixed&page-id=171%3A4044&starting-point-node-id=332%3A4136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-gray-300"
            >
              Figma
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
