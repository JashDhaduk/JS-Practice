

document.getElementById('toggle-theme').addEventListener('click', () => {
    const body = document.body;
  
    // Toggle the light and dark mode classes
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  
    // Optionally store the current mode in localStorage
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
  });
  
  // Load the saved theme on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
  });
