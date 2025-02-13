import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flower, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed w-full z-50 flex justify-between items-center p-6 bg-[#111111]/80 backdrop-blur-sm"
      initial={{ translateY: 0 }}
      animate={{ translateY: scrollY > 100 ? -100 : 0 }}
    >
      <div className="flex items-center">
        <Flower className="text-gray-500 ml-2" size={24} />
        <span className="text-gray-500 ml-2">Portfolio</span>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-gray-300" size={24} />
          ) : (
            <Menu className="text-gray-300" size={24} />
          )}
        </button>
      </div>
      <nav
        className={`flex-col md:flex-row md:flex items-center gap-8 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
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
