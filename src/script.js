const projects = [
  {image: "assets/enchente.png", id: 1, title: "System flood", description: "Sistema interativo feito em Python, totalmente funcional para o usuário, podendo gravar, visualizar, etc. Através de funções e loops", link: "https://github.com/chrisschunck"},
  {image: "", id: 2, title: "Projeto Front-End", description:"Front-End base project, symbolizing an ecommerce, where the objective was to put into practice skills such as Tailwind Fremwork, JavaScript manipulations, HTML and CSS. Contains a catalogue.", link: "https://github.com/chrisschunck"},
  {image: "", id: 3, title: "Ecommerce", description:"", link: "https://github.com/chrisschunck"},
]
 
function criarElementoProject(project) {
  const card = document.createElement('div');
  card.className = 'card p-3 flex flex-col h-full';
  card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="max-h-40 object-contain" />
        <h3 class="text-sm font-semibold line-clamp-2">${project.title}</h3>
        <p class="mb-4">${project.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <button class="btn-green-800 px-3 py-1 text-xs rounded">GitHub</button>
        </div>
    `
}


function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const cur = body.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });
}

document.addEventListener('DOMContentLoaded', () => {
const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;
const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(saved);})
