export default function ProjectCard({ project = {} }) {
  return (
    <div className="w-full max-w-sm p-4 border rounded bg-white shadow-sm">
      <div className="w-full h-40 flex items-center rounded justify-center bg-gray-100 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title || 'Imagem do projeto'}
            className="max-w-[160px] max-h-[160px] object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-sm text-gray-500">Sem imagem</span>
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-semibold line-clamp-2">
          {project.title || 'Projeto sem título'}
        </h3>
        <p className="mb-4 text-sm">
          {project.description || 'Sem descrição'}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              Ver no GitHub
            </a>
          ) : (
            <span className="text-xs text-gray-500">Sem link</span>
          )}
        </div>
      </div>
    </div>
  );
}
