import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50 font-inter">
      <header className="text-white py-5 font-inter">
        <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-green-300 transition">
          CS
          </Link>
          <div className="flex gap-8 text-base font-medium text-white">
            <Link to="/" className="hover:text-green-300 transition">Home</Link>
            <Link to="/projects" className="hover:text-green-300 transition">Projetos</Link>
            <Link to="/about" className="hover:text-green-300 transition">Sobre</Link>
            </div>
            </nav>
</header>


      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      </main>

      <footer className="bg-green-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <div className="flex justify-center items-center flex-wrap gap-4 mb-4 text-sm font-medium">
            <a
              href="mailto:christian.schunck10@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              title="Email"
            >
              📧 <span></span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/chrisschunck"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              title="GitHub"
            >
              🐙 <span></span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/christian-schunck/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              title="LinkedIn"
            >
              💼 <span></span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://instagram.com/chris.schunck"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
              title="Instagram"
            >
              📸 <span></span>
            </a>
          </div>
          <p className="text-xs text-gray-300">
            Desenvolvido por Christian Schunck | Direitos Reservados © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
