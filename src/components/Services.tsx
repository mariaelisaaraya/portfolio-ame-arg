import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Creación de interfaces optimizadas y dinámicas con React y Next.js. Implementación de SSR, SSG y animaciones fluidas para mejorar la experiencia del usuario.",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Prototipado y diseño de interfaces en Figma priorizando accesibilidad y engagement. Enfoque en diseño responsivo y optimización de la experiencia de usuario.",
  },
  {
    title: "Integración Web3",
    description:
      "Conexión con contratos inteligentes en Solidity desde el frontend. Implementación de wallets, ENS y NFTs para mejorar la usabilidad de DApps.",
  },
  {
    title: "Backend y APIs",
    description:
      "Desarrollo de APIs escalables con Node.js y Express. Integración con bases de datos MySQL, PostgreSQL y Supabase para manejar datos de manera eficiente.",
  },
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="px-20 py-16">
      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index}>
            <motion.button
              className="w-full flex justify-between items-center p-4 border-b border-gray-800 hover:bg-gray-900/50"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              whileHover={{ backgroundColor: "rgba(17, 17, 17, 0.5)" }}
            >
              <span className="text-lg">{service.title}</span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="p-4 text-gray-400">{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
