// Dark/Light mode toggle with bottom transition effect
const toggleDarkMode = (): void => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    
    // Add transition class
    html.classList.add('theme-transitioning');
    
    // Toggle theme
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    
    // Remove transition class after animation
    setTimeout(() => {
        html.classList.remove('theme-transitioning');
    }, 300);
};

// Initialize theme from localStorage
const initTheme = (): void => {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
};

// Call on page load
initTheme();

// Attach to button
document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);