const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

document.body.classList.add(currentTheme);
toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
});
