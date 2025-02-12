import { motion, useScroll } from "framer-motion";
import { Flower } from "lucide-react";

export function Header() {
  const { scrollY } = useScroll();

  return (
    <motion.header
      className="fixed w-full z-50 flex justify-between items-center p-6 bg-[#111111]/80 backdrop-blur-sm"
      style={{
        translateY: scrollY.get() > 100 ? -100 : 0,
      }}
      animate={{
        translateY: scrollY.get() > 100 ? -100 : 0,
      }}
    >
      <div className="flex items-center">
        <Flower className="text-gray-500 ml-2" size={24} />
        <span className="text-gray-500 ml-2">Portfolio</span>
      </div>
      <nav className="flex items-center gap-8">
        <motion.a
          href="#projects"
          className="text-gray-300 hover:text-white"
          whileHover={{ y: -2 }}
        >
          Proyectos
        </motion.a>
        <motion.a
          href="#about"
          className="text-gray-300 hover:text-white"
          whileHover={{ y: -2 }}
        >
          Sobre mi
        </motion.a>
        <motion.a
          href="#contact"
          className="text-gray-300 hover:text-white"
          whileHover={{ y: -2 }}
        >
          Contacto
        </motion.a>
        <motion.button
          className="bg-[#FF4500] text-white px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05, backgroundColor: "#FF5722" }}
          whileTap={{ scale: 0.95 }}
        >
          Hablemos
        </motion.button>
      </nav>
    </motion.header>
  );
}
