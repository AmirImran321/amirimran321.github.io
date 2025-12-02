const themeSelect = document.getElementById('theme-select');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
  themeSelect.value = savedTheme;
} else {
  applyTheme('auto');
  themeSelect.value = 'auto';
}

themeSelect.addEventListener('change', () => {
  const newTheme = themeSelect.value;
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

function applyTheme(theme) {
  if (theme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    htmlEl.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
  } else {
    htmlEl.setAttribute('data-bs-theme', theme);
  }
}

const projects = [
  {
    title: "Expense Tracker",
    description: "An expense tracker web application designed to manage personal finances.",
    image: "images/expenses.jpg",
    link: "https://github.com/AmirImran321/Expense-Tracker/tree/master"
  },
  {
    title: "E-commerce Project",
    description: "A simple e-commerce project that stores a variety of products.",
    image: "images/Ecommerce.jpeg",
    link: "https://github.com/AmirImran321/React-Ecommerce-Project"
  },
  {
    title: "Expense Tracker (v2)",
    description: "Another version of the expense tracker with extended features.",
    image: "images/expenses.jpg",
    link: "#"
  }
];


const projectContainer = document.querySelector("#projects .row");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

  col.innerHTML = `
    <a href="${project.link}" target="_blank" rel="noopener" class="text-decoration-none">
      <div class="card h-100 shadow-sm">
        <img src="${project.image}" alt="${project.title} screenshot" class="card-img-top project-list">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
        </div>
      </div>
    </a>
  `;

  projectContainer.appendChild(col);
});
