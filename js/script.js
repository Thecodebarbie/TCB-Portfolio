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
                  body.dark {
                    --sidebar-color: #18191A;
                    --primary-color: #242526;
                    --primary-color-light: #3a3b3c;
                    --arrow-color: #fae3ed;
                    --toggle-color: #b0809a;
                    --text-color: #ccc;
                    --nav-link-color: #FBF6E9;
                  }

                  .header-text .name, .header-text .profession {
                        color: #f8b1e3; /* Customize the color for the dark mode header text */
                      }
                `;
    document.head.appendChild(styleElement);
    localStorage.setItem('darkMode', 'enabled');
  }

  function disableDarkMode() {
    document.body.classList.remove('dark');
    // Remove dark mode styles dynamically
    const darkModeStyles = document.getElementById('darkModeStyles');
    if (darkModeStyles) {
      darkModeStyles.remove();
    }
    localStorage.setItem('darkMode', null);
  }
});
