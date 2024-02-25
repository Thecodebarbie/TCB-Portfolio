document.addEventListener('DOMContentLoaded', function () {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

        if (isDarkMode) {
                enableDarkMode();
        }

        darkModeToggle.addEventListener('change', () => {
                if (darkModeToggle.checked) {
                        enableDarkMode();
                } else {
                        disableDarkMode();
                }
        });

        darkModeToggle.addEventListener('change', () => {
                if (darkModeToggle.checked) {
                        enableDarkMode();
                } else {
                        disableDarkMode();
                }
        });
        
        function enableDarkMode() {
                document.body.classList.add('dark');
                // Add dark mode styles dynamically
                const styleElement = document.createElement('style');
                styleElement.setAttribute('id', 'darkModeStyles');
                styleElement.innerHTML = `
            
 
        
