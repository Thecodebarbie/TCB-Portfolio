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
            
        
