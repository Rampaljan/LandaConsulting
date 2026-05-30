let currentLanguage = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePage();
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (let k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

function updatePage() {
    // Highlight active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = getTranslation(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        el.placeholder = getTranslation(key);
    });

    //class="service-icon"
    // Service card icons (inline SVGs) matched by index order
    const serviceIcons = [
        // 0: Handshake – Strategic Consulting
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 89.689 16.621 c -0.198 -0.188 -0.461 -0.284 -0.739 -0.274 c -6.479 0.321 -13.518 1.398 -22.148 3.389 c -0.271 0.063 -0.504 0.235 -0.643 0.476 c -0.139 0.241 -0.17 0.529 -0.088 0.794 l 0.838 2.704 c -6.363 -2.413 -15.313 -3.802 -23.06 -3.497 c -2.84 0 -6.082 1.409 -9.045 3.5 H 23.089 l 0.839 -2.708 c 0.083 -0.266 0.05 -0.553 -0.088 -0.794 c -0.138 -0.241 -0.371 -0.414 -0.642 -0.476 c -8.63 -1.991 -15.668 -3.068 -22.148 -3.389 c -0.269 -0.012 -0.54 0.085 -0.739 0.274 C 0.112 16.81 0 17.072 0 17.346 v 34.342 c 0 0.553 0.448 1 1 1 h 12.378 c 0.438 0 0.826 -0.285 0.955 -0.704 l 0.472 -1.523 c 10.187 11.872 20.546 22.775 28.634 22.775 c 1.557 0 3.029 -0.411 4.401 -1.29 l 0.211 0.214 c 0.944 0.956 2.209 1.487 3.561 1.495 c 0.011 0 0.021 0 0.032 0 c 1.339 0 2.597 -0.515 3.546 -1.451 c 0.834 -0.825 1.299 -1.873 1.436 -2.956 c 0.93 0.771 2.061 1.18 3.206 1.18 c 1.281 -0.001 2.564 -0.484 3.547 -1.454 c 1.109 -1.096 1.58 -2.581 1.456 -4.025 c 0.446 0.11 0.897 0.185 1.35 0.185 c 1.283 0 2.538 -0.443 3.448 -1.342 c 0.956 -0.944 1.487 -2.209 1.495 -3.561 s -0.507 -2.622 -1.387 -3.507 c -0.368 -0.453 -0.748 -0.888 -1.121 -1.334 l 6.816 -4.149 l 0.23 0.742 c 0.13 0.419 0.517 0.704 0.955 0.704 H 89 c 0.553 0 1 -0.447 1 -1 V 17.346 C 90 17.072 89.888 16.81 89.689 16.621 z M 12.641 50.688 H 2 V 18.403 c 5.806 0.359 12.122 1.335 19.699 3.043 L 12.641 50.688 z M 68.227 62.368 c -1.139 1.126 -3.31 1.005 -4.556 -0.258 c -0.017 -0.017 -0.039 -0.023 -0.057 -0.038 c -0.067 -0.077 -0.118 -0.163 -0.191 -0.237 l -10.95 -11.086 c -0.39 -0.392 -1.021 -0.396 -1.415 -0.009 c -0.393 0.389 -0.396 1.021 -0.009 1.415 l 10.95 11.086 c 0.569 0.575 0.88 1.343 0.875 2.16 c -0.005 0.816 -0.325 1.58 -0.901 2.148 c -1.195 1.183 -3.128 1.168 -4.31 -0.026 l -2.425 -2.455 c -0.002 -0.002 -0.003 -0.004 -0.004 -0.005 l -10.95 -11.085 c -0.389 -0.391 -1.022 -0.396 -1.414 -0.009 c -0.393 0.389 -0.397 1.021 -0.009 1.415 L 53.81 66.47 c 1.182 1.195 1.17 3.129 -0.026 4.31 c -1.196 1.182 -3.13 1.168 -4.31 -0.026 l -13.38 -13.545 c -0.389 -0.392 -1.022 -0.398 -1.414 -0.008 c -0.393 0.388 -0.397 1.021 -0.009 1.414 l 11.711 11.855 c -7.435 3.974 -19.75 -9.239 -30.877 -22.268 l 6.965 -22.487 h 9.815 c -2.741 2.432 -5.001 5.336 -6.092 7.983 c -1.396 3.386 -0.487 5.29 0.521 6.291 c 0.026 0.026 0.054 0.051 0.083 0.074 c 3.843 3.047 7.628 3.815 13.523 -2.283 c 2.001 0.122 3.705 -0.225 5.184 -1.064 c 8.306 5.807 15.937 12.961 22.749 21.343 C 69.435 59.254 69.423 61.188 68.227 62.368 z M 67.318 53.842 c -6.406 -7.41 -13.527 -13.843 -21.216 -19.146 c -0.341 -0.236 -0.793 -0.236 -1.134 -0.001 c -1.322 0.907 -2.939 1.251 -4.944 1.055 c -0.311 -0.034 -0.614 0.084 -0.827 0.31 c -5.585 5.943 -8.344 4.656 -11.109 2.473 c -0.996 -1.039 -0.577 -2.784 -0.046 -4.073 c 2.224 -5.398 10.113 -12.246 15.846 -12.247 c 8.172 -0.313 17.649 1.276 23.786 3.967 l 7.152 23.091 L 67.318 53.842 z M 88 50.688 H 77.358 l -9.058 -29.242 c 7.577 -1.708 13.894 -2.684 19.699 -3.043 V 50.688 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`,

        // 1: Leaf Compliance / EU ETS
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 30.648 90 h -4.666 c -0.276 0 -0.54 -0.114 -0.729 -0.315 c -0.189 -0.202 -0.287 -0.473 -0.269 -0.748 c 1.473 -23.129 7.78 -37.706 23.516 -52.984 c -11.987 6.803 -23.657 18.781 -25.661 35.247 c -0.051 0.42 -0.361 0.763 -0.774 0.854 c -0.414 0.094 -0.84 -0.086 -1.065 -0.443 c -8.808 -14.02 -8.505 -26.712 0.952 -39.944 c 5.454 -7.272 13.28 -11.279 20.185 -14.815 c 8.346 -4.273 15.554 -7.964 17.098 -16.04 c 0.078 -0.407 0.398 -0.723 0.807 -0.796 c 0.407 -0.073 0.818 0.113 1.032 0.467 c 10.854 17.977 19.798 35.828 10.159 56.542 c -7.694 13.752 -20.459 20.112 -37.994 18.96 c -1.01 4.324 -1.531 8.595 -1.59 13.028 C 31.641 89.561 31.195 90 30.648 90 z M 27.052 88 h 2.617 c 0.129 -4.515 0.728 -8.881 1.825 -13.313 c 0.118 -0.475 0.554 -0.793 1.049 -0.757 c 17.367 1.366 29.437 -4.464 36.911 -17.814 c 8.859 -19.047 1.472 -35.189 -8.879 -52.575 c -2.563 7.429 -9.851 11.161 -17.526 15.091 c -7.04 3.604 -14.319 7.332 -19.483 14.216 c -8.376 11.72 -9.128 23.011 -2.278 35.324 c 3.534 -18.634 18.924 -31.329 32.625 -37.12 c 0.452 -0.192 0.977 -0.027 1.237 0.39 c 0.261 0.416 0.181 0.959 -0.188 1.283 C 36.16 49.192 28.777 63.753 27.052 88 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`,


        // 2: Gear Technical Audits
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 33.75 89.999 c -0.416 0 -0.838 -0.079 -1.245 -0.248 l -10.313 -4.272 c -0.806 -0.333 -1.434 -0.961 -1.769 -1.769 c -0.334 -0.806 -0.334 -1.694 0 -2.501 c 1.404 -3.39 0.665 -7.107 -1.93 -9.702 c -2.595 -2.595 -6.313 -3.336 -9.703 -1.931 c -1.665 0.689 -3.58 -0.103 -4.27 -1.768 L 0.25 57.495 c -0.689 -1.664 0.104 -3.579 1.768 -4.27 C 5.408 51.821 7.514 48.67 7.514 45 c 0 -3.67 -2.106 -6.822 -5.497 -8.226 c -0.807 -0.334 -1.435 -0.962 -1.769 -1.769 c -0.334 -0.807 -0.333 -1.695 0 -2.501 l 4.271 -10.313 c 0.69 -1.665 2.606 -2.458 4.27 -1.769 c 3.39 1.403 7.108 0.665 9.703 -1.93 s 3.334 -6.313 1.93 -9.703 c -0.689 -1.665 0.104 -3.58 1.769 -4.27 L 32.505 0.25 c 1.668 -0.69 3.58 0.104 4.27 1.768 C 38.179 5.408 41.331 7.514 45 7.514 c 3.669 0 6.821 -2.106 8.225 -5.497 c 0.689 -1.665 2.606 -2.459 4.27 -1.768 l 10.313 4.271 c 1.664 0.69 2.457 2.605 1.768 4.27 c -1.404 3.39 -0.664 7.108 1.931 9.703 c 2.594 2.594 6.313 3.333 9.702 1.93 c 0.807 -0.334 1.694 -0.334 2.501 0 c 0.808 0.334 1.436 0.962 1.769 1.769 l 4.272 10.313 c 0.688 1.665 -0.104 3.58 -1.769 4.27 c -3.391 1.404 -5.496 4.556 -5.496 8.226 c 0 3.67 2.105 6.821 5.496 8.226 l 0 0 c 1.664 0.689 2.457 2.604 1.769 4.269 l -4.272 10.314 c -0.691 1.665 -2.604 2.457 -4.27 1.768 c -3.391 -1.405 -7.109 -0.664 -9.702 1.931 c -2.595 2.595 -3.335 6.313 -1.931 9.702 c 0.689 1.664 -0.104 3.579 -1.768 4.27 l -10.313 4.272 c -1.668 0.692 -3.581 -0.105 -4.27 -1.769 c -1.404 -3.391 -4.556 -5.496 -8.225 -5.496 c -3.67 0 -6.822 2.105 -8.226 5.496 C 36.254 89.239 35.034 89.999 33.75 89.999 z M 12.267 66.871 c 2.807 0 5.528 1.108 7.641 3.222 c 3.177 3.178 4.083 7.73 2.363 11.882 c -0.129 0.313 -0.129 0.657 0 0.971 c 0.13 0.313 0.373 0.556 0.686 0.686 l 10.313 4.272 c 0.644 0.268 1.388 -0.042 1.656 -0.687 c 1.72 -4.151 5.58 -6.73 10.073 -6.73 c 0 0 0 0 0 0 c 4.494 0 8.353 2.579 10.073 6.73 c 0.267 0.645 1.01 0.954 1.657 0.687 l 10.313 -4.272 c 0.646 -0.268 0.953 -1.011 0.686 -1.656 c -1.72 -4.152 -0.813 -8.705 2.363 -11.883 c 3.179 -3.176 7.729 -4.083 11.883 -2.363 c 0.647 0.268 1.389 -0.041 1.656 -0.686 l 4.272 -10.313 c 0.267 -0.646 -0.041 -1.389 -0.687 -1.656 c -4.151 -1.72 -6.73 -5.579 -6.73 -10.073 s 2.579 -8.354 6.73 -10.073 c 0.646 -0.268 0.953 -1.011 0.687 -1.657 l -4.272 -10.313 c -0.13 -0.313 -0.373 -0.557 -0.686 -0.687 c -0.315 -0.129 -0.659 -0.128 -0.971 0 c -4.153 1.72 -8.705 0.814 -11.882 -2.363 c -3.178 -3.178 -4.084 -7.731 -2.364 -11.883 c 0.268 -0.646 -0.04 -1.389 -0.686 -1.656 L 56.729 2.097 c -0.648 -0.269 -1.39 0.04 -1.656 0.686 C 53.354 6.935 49.494 9.514 45 9.514 c -4.494 0 -8.354 -2.579 -10.074 -6.731 c -0.268 -0.646 -1.011 -0.952 -1.656 -0.686 L 22.958 6.369 c -0.646 0.268 -0.954 1.011 -0.687 1.656 c 1.72 4.152 0.814 8.705 -2.363 11.883 c -3.178 3.177 -7.729 4.083 -11.883 2.363 c -0.646 -0.268 -1.389 0.041 -1.656 0.687 L 2.097 33.271 c -0.13 0.313 -0.13 0.657 0 0.97 c 0.129 0.313 0.373 0.556 0.686 0.686 c 4.152 1.72 6.731 5.58 6.731 10.074 c 0 4.494 -2.58 8.353 -6.731 10.073 c -0.646 0.268 -0.954 1.011 -0.686 1.656 l 4.271 10.313 c 0.268 0.645 1.01 0.953 1.656 0.686 C 9.416 67.152 10.853 66.871 12.267 66.871 z M 45 64.629 c -10.823 0 -19.629 -8.806 -19.629 -19.629 S 34.177 25.371 45 25.371 S 64.629 34.177 64.629 45 S 55.823 64.629 45 64.629 z M 45 27.371 c -9.721 0 -17.629 7.908 -17.629 17.629 S 35.279 62.629 45 62.629 S 62.629 54.721 62.629 45 S 54.721 27.371 45 27.371 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`,


        // 3: Exclamation Risk Management
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 85.429 85.078 H 4.571 c -1.832 0 -3.471 -0.947 -4.387 -2.533 c -0.916 -1.586 -0.916 -3.479 0 -5.065 L 40.613 7.455 C 41.529 5.869 43.169 4.922 45 4.922 c 0 0 0 0 0 0 c 1.832 0 3.471 0.947 4.386 2.533 l 40.429 70.025 c 0.916 1.586 0.916 3.479 0.001 5.065 C 88.901 84.131 87.261 85.078 85.429 85.078 z M 45 7.922 c -0.747 0 -1.416 0.386 -1.79 1.033 L 2.782 78.979 c -0.373 0.646 -0.373 1.419 0 2.065 c 0.374 0.647 1.042 1.033 1.789 1.033 h 80.858 c 0.747 0 1.416 -0.387 1.789 -1.033 s 0.373 -1.419 0 -2.065 L 46.789 8.955 C 46.416 8.308 45.747 7.922 45 7.922 L 45 7.922 z M 45 75.325 c -4.105 0 -7.446 -3.34 -7.446 -7.445 s 3.34 -7.445 7.446 -7.445 s 7.445 3.34 7.445 7.445 S 49.106 75.325 45 75.325 z M 45 63.435 c -2.451 0 -4.446 1.994 -4.446 4.445 s 1.995 4.445 4.446 4.445 s 4.445 -1.994 4.445 -4.445 S 47.451 63.435 45 63.435 z M 45 57.146 c -3.794 0 -6.882 -3.087 -6.882 -6.882 V 34.121 c 0 -3.794 3.087 -6.882 6.882 -6.882 c 3.794 0 6.881 3.087 6.881 6.882 v 16.144 C 51.881 54.06 48.794 57.146 45 57.146 z M 45 30.239 c -2.141 0 -3.882 1.741 -3.882 3.882 v 16.144 c 0 2.141 1.741 3.882 3.882 3.882 c 2.14 0 3.881 -1.741 3.881 -3.882 V 34.121 C 48.881 31.98 47.14 30.239 45 30.239 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`,


        // 4: Dollar Investment Fund Consulting
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">	<path d="M 87.148 71.197 H 2.851 C 1.279 71.197 0 69.918 0 68.346 V 21.654 c 0 -1.572 1.279 -2.851 2.851 -2.851 h 84.297 c 1.572 0 2.852 1.279 2.852 2.851 v 46.691 C 90 69.918 88.721 71.197 87.148 71.197 z M 2.851 20.803 C 2.382 20.803 2 21.185 2 21.654 v 46.691 c 0 0.47 0.382 0.852 0.851 0.852 h 84.297 c 0.47 0 0.852 -0.382 0.852 -0.852 V 21.654 c 0 -0.469 -0.382 -0.851 -0.852 -0.851 H 2.851 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 73.297 63.908 H 16.716 c -0.552 0 -1 -0.447 -1 -1 c 0 -4.096 -3.332 -7.428 -7.427 -7.428 c -0.552 0 -1 -0.447 -1 -1 V 35.52 c 0 -0.552 0.448 -1 1 -1 c 4.095 0 7.427 -3.332 7.427 -7.427 c 0 -0.552 0.448 -1 1 -1 h 56.581 c 0.541 0 0.983 0.43 1 0.971 c 0.119 4.04 3.376 7.205 7.414 7.205 c 0.553 0 1 0.448 1 1 v 18.961 c 0 0.553 -0.447 1 -1 1 c -4.096 0 -7.428 3.332 -7.428 7.428 l 0.013 0.218 c 0.01 0.271 -0.092 0.534 -0.28 0.729 C 73.827 63.798 73.568 63.908 73.297 63.908 z M 17.664 61.908 h 54.649 c 0.356 -4.52 3.913 -8.152 8.398 -8.627 V 36.216 c -4.336 -0.45 -7.771 -3.795 -8.336 -8.124 H 17.664 c -0.466 4.401 -3.973 7.909 -8.375 8.375 v 17.066 C 13.69 53.999 17.198 57.507 17.664 61.908 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 45 58.5 c -7.444 0 -13.5 -6.056 -13.5 -13.5 c 0 -7.444 6.056 -13.5 13.5 -13.5 c 7.444 0 13.5 6.056 13.5 13.5 C 58.5 52.444 52.444 58.5 45 58.5 z M 45 33.5 c -6.341 0 -11.5 5.159 -11.5 11.5 c 0 6.341 5.159 11.5 11.5 11.5 c 6.341 0 11.5 -5.159 11.5 -11.5 C 56.5 38.659 51.341 33.5 45 33.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><circle cx="22.82" cy="45" r="2" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>	<circle cx="67.18" cy="45" r="2" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path d="M 44.881 52.259 c -2.037 0 -3.829 -1.064 -4.567 -2.711 c -0.226 -0.505 0 -1.096 0.504 -1.322 c 0.503 -0.223 1.095 -0.001 1.321 0.504 c 0.41 0.915 1.511 1.529 2.742 1.529 s 2.332 -0.614 2.741 -1.528 c 0.241 -0.59 0.148 -0.917 0.057 -1.108 c -0.288 -0.604 -1.286 -1.163 -2.964 -1.664 c -1.574 -0.469 -3.473 -1.202 -4.198 -2.717 c -0.396 -0.828 -0.388 -1.755 0.023 -2.759 c 0.75 -1.676 2.542 -2.741 4.58 -2.741 s 3.83 1.064 4.567 2.711 c 0.226 0.504 -0.001 1.096 -0.505 1.321 c -0.508 0.228 -1.096 -0.001 -1.321 -0.504 c -0.409 -0.915 -1.511 -1.529 -2.741 -1.529 s -2.333 0.614 -2.742 1.529 c -0.27 0.661 -0.109 0.997 -0.057 1.107 c 0.289 0.604 1.286 1.163 2.965 1.664 c 1.574 0.469 3.473 1.202 4.198 2.717 c 0.396 0.828 0.388 1.756 -0.022 2.759 C 48.711 51.194 46.918 52.259 44.881 52.259 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 44.881 54.04 c -0.552 0 -1 -0.447 -1 -1 v -1.781 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 v 1.781 C 45.881 53.593 45.433 54.04 44.881 54.04 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 44.881 39.742 c -0.552 0 -1 -0.448 -1 -1 v -1.782 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 1.782 C 45.881 39.294 45.433 39.742 44.881 39.742 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`,


        // 5: time Interim Management
        `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"><path d="M 60.269 30.771 L 47.201 41.304 c -0.624 -0.367 -1.341 -0.593 -2.116 -0.593 c -2.318 0 -4.204 1.886 -4.204 4.204 c 0 1.794 1.135 3.318 2.721 3.921 v 23.038 c 0 0.819 0.664 1.484 1.484 1.484 s 1.483 -0.664 1.483 -1.484 V 48.836 c 1.585 -0.602 2.721 -2.126 2.721 -3.921 c 0 -0.457 -0.092 -0.889 -0.227 -1.301 l 13.07 -10.534 c 0.637 -0.514 0.738 -1.448 0.224 -2.086 C 61.84 30.357 60.907 30.256 60.269 30.771 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/><path d="M 45.084 -0.085 c -24.813 0 -45 20.187 -45 45 c 0 24.814 20.187 45.001 45 45.001 c 24.813 0 45 -20.187 45 -45.001 C 90.084 20.102 69.897 -0.085 45.084 -0.085 z M 45.084 86.949 c -23.177 0 -42.033 -18.856 -42.033 -42.034 c 0 -23.177 18.856 -42.033 42.033 -42.033 c 23.177 0 42.033 18.856 42.033 42.033 C 87.117 68.093 68.261 86.949 45.084 86.949 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/></g></svg>`
    ];

    // Dynamically render services
    const servicesContainer = document.getElementById('servicesGrid');
    servicesContainer.innerHTML = '';
    getTranslation('services.items').forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        const icon = serviceIcons[index] || '';
        card.innerHTML = `${icon}<h3>${service.title}</h3><p>${service.description}</p>`;
        servicesContainer.appendChild(card);
    });

    // Dynamically render projects
    const projectsContainer = document.getElementById('projectsGrid');
    projectsContainer.innerHTML = '';
    getTranslation('projects.items').forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(card);
    });

    // Dynamically render blog
    const blogContainer = document.getElementById('blogGrid');
    blogContainer.innerHTML = '';
    getTranslation('blog.items').forEach(article => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
        blogContainer.appendChild(card);
    });

    // Initialize/re-initialize scroll observer
    initScrollObserver();
}

// Dynamic scroll highlight observer for cards on mobile (one highlighted at a time)
let scrollListener;

function initScrollObserver() {
    if (scrollListener) {
        window.removeEventListener('scroll', scrollListener);
    }

    const cards = document.querySelectorAll('.service-card, .project-card, .blog-card');
    if (cards.length === 0) return;

    let ticking = false;

    scrollListener = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                highlightClosestCard(cards);
                ticking = false;
            });
            ticking = true;
        }
    };

    // Run once initially to highlight the starting closest card
    highlightClosestCard(cards);

    window.addEventListener('scroll', scrollListener);
}

function highlightClosestCard(cards) {
    // If the user is at the very top of the page (within 150px of scrollY), do not highlight anything
    if (window.scrollY < 150) {
        cards.forEach(card => card.classList.remove('active-card'));
        return;
    }

    const viewportCenter = window.innerHeight / 2;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        // Remove active class by default
        card.classList.remove('active-card');

        // Only highlight if the card is visible in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (distance < minDistance) {
                minDistance = distance;
                closestCard = card;
            }
        }
    });

    if (closestCard) {
        closestCard.classList.add('active-card');
    }
}

// Initialize
setLanguage(currentLanguage);

// Event Listeners
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const langToggle = document.getElementById('langToggle');
const langOptions = document.getElementById('langOptions');
const langBtns = document.querySelectorAll('.lang-btn');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

langToggle.addEventListener('click', () => {
    langOptions.classList.toggle('active');
});

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        langOptions.classList.remove('active');
    });
});
