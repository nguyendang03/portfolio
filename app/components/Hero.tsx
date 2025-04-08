export default function Hero() {
    return (
      <section id="welcome-section" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Nguyen Pham Minh Dang</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            I'm a third year student of FPT University studying front-end engineering.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              See my work
            </a>
            <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md shadow-md hover:bg-gray-50 border border-indigo-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Contact me
            </a>
          </div>
        </div>
      </section>
    );
  }