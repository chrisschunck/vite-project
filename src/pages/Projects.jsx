import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const projects = [
	{
		id: 1,
		title: 'Sistema de enchentes',
		description: 'Sistema interativo feito em Python, totalmente funcional para o usuário, podendo gravar, visualizar, etc. Através de funções e loops',
		image: '/enchente.png', 
		github: 'https://github.com/chrisschunck/sistema-enchentes-python'
	},
	{
		id: 2,
		title: 'Projeto Front-End',
		description: 'Projeto base Front-End, simbolizando um ecommerce, onde o objetivo era colocar em prática habilidades como Tailwind Fremwork, manipulações de JavaScript, HTML e CSS. Contém um catálogo',
		image: '/FE.png',
		github: 'https://github.com/chrisschunck/Projeto-Front-End'
	}
];

const Projects = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	const filtered = projects.filter(p =>
		p.title.toLowerCase().includes(search.toLowerCase()) ||
		p.description.toLowerCase().includes(search.toLowerCase())
	);

	function handleCardClick(id) {
		navigate(`/projects/${id}`);
	}

	return (
		<div>
			<h1 className="text-2xl text-center font-bold mb-4">Meus Projetos</h1>
			<input
				type="text"
				placeholder="Buscar projetos..."
				value={search}
				onChange={e => setSearch(e.target.value)}
				className="mb-4 py-20 border rounded w-full max-w-md"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{filtered.length > 0 ? (
					filtered.map(p => (
						<div key={p.id} onClick={() => handleCardClick(p.id)} className="cursor-pointer">
							<ProjectCard project={p} />
						</div>
					))
				) : (
					<div className="col-span-2 text-center text-gray-500">Nenhum projeto localizado</div>
				)}
			</div>
		</div>
	);
}

export default Projects;