import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  /* {
    
    category: "Next - Figma - UX UI",
    title: "AI-Interview 2025",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&q=80",
  },
  {
    category: "Brand Identity - Web Design",
    title: "Buena Salud 2025",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&q=80",
  },*/
  {
    category: "Next - Figma - UX UI",
    title: "DefiWise 2024",
    image: "images/defiWise1.png",
    path: "/project/defiwise",
  },
  {
    category: "HTML - CSS - JavaScript - NodeJs - MySQL - PostgreSQL",
    title: "YPF - Ingenias 2024/2023",
    image: "/src/images/ingenias1.png",
    path: "/project/ingenias",
  },
];

export function Projects() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8" id="projects">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">🔥 Proyectos Destacados</h2>
        <motion.a
          href="https://github.com/mariaelisaaraya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF4500]/10"
          whileHover={{
            backgroundColor: "rgba(255, 69, 0, 0.2)",
            scale: 1.05,
          }}
        >
          Ver más <ArrowRight size={16} className="text-[#FF4500]" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {project.path ? (
              <Link to={project.path}>
                <div className="overflow-hidden rounded-xl mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.category}</p>
                  <div className="text-orange-500 hover:text-orange-700 flex items-center">
                    Ver Proyecto <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            ) : (
              <div>
                <div className="overflow-hidden rounded-xl mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.category}</p>
                  <div className="text-orange-500 hover:text-orange-700 flex items-center">
                    Ver Proyecto <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
