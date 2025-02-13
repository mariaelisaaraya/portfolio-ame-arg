import { motion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";

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

            <div className="space-y-4">
              <motion.a
                href="mailto:maria.elisa.araya.work@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white"
                whileHover={{ x: 4 }}
              >
                <Mail size={20} />
                maria.elisa.araya.work@gmail.com
              </motion.a>

              <motion.a
                href="https://t.me/ar3lisa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white"
                whileHover={{ x: 4 }}
              >
                <MessageCircle size={20} />
                @ar3lisa en Telegram
              </motion.a>
            </div>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900/50 rounded-lg border border-gray-800 p-3 text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900/50 rounded-lg border border-gray-800 p-3 text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900/50 rounded-lg border border-gray-800 p-3 text-white"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#FF5722" }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensaje
                <Send size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
