import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Projeto Exemplo A',
    description: 'Uma breve descrição do projeto A.',
    image: '/enchente.png',
    github: 'https://github.com/chrisschunck/sistema-enchentes-python'
  },
  {
    id: 2,
    title: 'Projeto Exemplo B',
    description: 'Uma breve descrição do projeto B.',
    image: '/FE.png',
    github: 'https://github.com/chrisschunck/Projeto-Front-End'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center mt-8">
        Projeto não encontrado.{' '}
        <Link to="/projects" className="text-blue-600 underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">{project.title}</h1>

      <div className="w-full h-64 flex text-center items-center justify-center bg-gray-100 overflow-hidden mb-4 rounded">
        <img
          src={project.image}
          alt={project.title}
          className="max-w-[500px] max-h-[450px] object-contain"
          loading="lazy"
        />
      </div>

      <p className="mb-4 text-center  text-gray-700">{project.description}</p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 items-center underline text-sm"
      >
        Ver no GitHub
      </a>
<br></br>
      <div className="mt-6">
        <Link to="/projects" className="text-gray-700 items-center hover:underline text-sm">
          ← Voltar para projetos
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
