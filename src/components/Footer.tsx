export function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="mailto:maria.elisa.araya.work@gmail.com"
            className="text-sm text-gray-400 hover:text-white"
          >
            maria.elisa.araya.work@gmail.com
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center md:text-left">
          <p>Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}
