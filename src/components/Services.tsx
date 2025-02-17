import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Desarrollo de interfaces optimizadas y dinámicas con React y Next.js, implementando SSR, SSG y animaciones fluidas para mejorar la experiencia del usuario. Experiencia en pruebas unitarias con Angular.",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Prototipado y diseño de interfaces en Figma, priorizando accesibilidad, diseño responsivo y optimización de la experiencia del usuario. Enfoque en investigación y desarrollo de productos digitales.",
  },
  {
    title: "Integración Web3",
    description:
      "Integración de contratos inteligentes en Solidity desde el frontend, incluyendo la implementación de wallets, ENS y NFTs para mejorar la usabilidad de DApps.",
  },
  {
    title: "Backend y APIs",
    description:
      "Desarrollo de APIs escalables con Node.js y Express, con integración eficiente de bases de datos como MySQL, PostgreSQL y Supabase. Experiencia en pruebas con Golang.",
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
