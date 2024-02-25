document.addEventListener('DOMContentLoaded', function () {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';