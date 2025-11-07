const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-center font-inter text-gray-100">
      <div className="bg-green-900 rounded-xl p-8 shadow-lg mb-12">
        <h1 className="text-3xl font-bold text-green-300 mb-6">Sobre Mim</h1>
        <p className="text-base leading-relaxed mb-6">
          Bem-vindo(a)! Eu sou <span className="font-semibold text-white">Christian Schunck de Almeida</span>, moro em São Paulo, Brasil.
          Atualmente trabalho como <span className="text-green-200">Auxiliar Administrativo</span> e curso Engenharia de Software na FIAP.
          Tenho <span className="font-medium">18 anos</span> e estou sempre buscando desafios para superar meus limites.
        </p>

        <ul className="list-disc list-inside space-y-2 text-base mb-6">
          <li>Praticar Esportes ⚽</li>
          <li>Ir à academia 🏋️‍♂️</li>
          <li>Gosto de crianças 👶</li>
          <li>Palmeiras 💚</li>
        </ul>

        <blockquote className="border-l-4 border-green-400 pl-4 italic text-sm text-gray-300">
          “No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio-termo.
          Ou você faz uma coisa bem-feita ou não faz.” — <span className="font-semibold text-green-200">Ayrton Senna</span>
        </blockquote>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-md text-gray-800">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
  {[
    { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML5" },
    { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", alt: "CSS3" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", alt: "React" },
    { src: "https://img.beget.com/cp/plain/shared/Vw1LL-LQGTwxDkPTmtgGK_DCY8DeRa7p/mongodb2x.png@.webp", alt: "MongoDB" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", alt: "Python" },
    { src: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png", alt: "SQL" },
    { src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", alt: "Git" },
  ].map((tech, index) => (
    <div key={index} className="group">
      <img
        src={tech.src}
        alt={tech.alt}
        className="transition-transform duration-300 transform group-hover:scale-110"
        style={{ width: '150x', height: '150px' }}
      />
      <p className="text-xs text-center mt-2 font-medium">{tech.alt}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default About;
