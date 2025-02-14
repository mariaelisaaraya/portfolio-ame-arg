import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#111111] text-white"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-400">
              Siempre estoy abierta a nuevas oportunidades y proyectos copados.
              Si tenés alguna pregunta o simplemente querés saludar, ¡mandame un
              mensaje y charlamos!
            </p>
          </div>

          <div className="space-y-4 text-right">
            <motion.a
              href="mailto:maria.elisa.araya.work@gmail.com"
              className="flex justify-end items-center gap-3 text-gray-400 hover:text-white"
              whileHover={{ x: 4 }}
            >
              <Mail size={20} />
              maria.elisa.araya.work@gmail.com
            </motion.a>

            <motion.a
              href="https://t.me/ar3lisa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center gap-3 text-gray-400 hover:text-white"
              whileHover={{ x: 4 }}
            >
              <MessageCircle size={20} />
              @ar3lisa en Telegram
            </motion.a>

            <a
              href="https://www.linkedin.com/in/mariaelisaaraya/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center gap-3 text-gray-400 hover:text-white"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
