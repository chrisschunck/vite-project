const Home = () => {
  function handleSupport() {
    alert('Envie uma mensagem para christian.schunck10@gmail.com ou acesse nossas redes sociais!');
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section>
        <div>
          <h1 className="font-bold text-2xl mb-4">Olá, Eu sou Christian Schunck</h1>
          <h2 className="text-lg font-semibold text-white-600 mb-2">Breve apresentação</h2>
          <p className="text-sm leading-relaxed text-white-800 bg-white rounded shadow p-4">
            Um estudante de Engenharia de Software que gosta de tirar ideias do papel por meio do código.<br />
            Com o tempo, estou buscando tecnologias e encontrando minha paixão na construção de sistemas<br />
            de alto desempenho e experiências intuitivas do usuário. Estou aprofundando em <span className="font-semibold text-green-700">Python, React e SQL</span><br /> 
            — gosto de contribuir em pilhas de back-end e front-end. Minhas principais áreas de interesse<br />
            incluem o desenvolvimento de Aplicativos da Web, análise de dados e Data Base. Sempre que possível,<br />
             estou procurando me envolver em projetos práticos para aprimorar minhas habilidades e expandir meu conhecimento.<br />
          </p>
        </div>
        <div className="flex md:w-1/3">
          <img
            src="/Christian.jpeg"
            alt="Christian Schunck"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
        </div>
      </section>
<br></br>
      <section className="text-center mt-12">
  <h2 className="text-2xl font-bold text-green-800 mb-6">Contato</h2>
  <div className="flex justify-center items-center flex-wrap gap-4 text-sm font-medium text-gray-800">
    <a
      href="mailto:christian.schunck10@gmail.com"
      className="flex items-center gap-2 hover:text-green-600 transition"
      title="Email"
    >
      📧 <span>Gmail</span>
    </a>
    <span className="text-gray-400">|</span>
    <a
      href="https://github.com/chrisschunck"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-green-600 transition"
      title="GitHub"
    >
      🐙 <span>GitHub</span>
    </a>
    <span className="text-gray-400">|</span>
    <a
      href="https://www.linkedin.com/in/christian-schunck/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-green-600 transition"
      title="LinkedIn"
    >
      💼 <span>LinkedIn</span>
    </a>
    <span className="text-gray-400">|</span>
    <a
      href="https://instagram.com/chris.schunck"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-green-600 transition"
      title="Instagram"
    >
      📸 <span>Instagram</span>
    </a>
  </div>
</section>

    </div>
  );
};

export default Home;
