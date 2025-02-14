import { motion } from "framer-motion";

export function ContactButton() {
  return (
    <motion.a
      href="mailto:maria.elisa.araya.work@gmail.com"
      className="bg-[#FF4500] text-white px-4 py-2 rounded-full"
      whileHover={{ scale: 1.05, backgroundColor: "#FF5722" }}
      whileTap={{ scale: 0.95 }}
    >
      Hablemos
    </motion.a>
  );
}
