export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Nguyen Pham Minh Dang. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#welcome-section" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  }