// assets/script.js
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search');

    if (searchQuery) {
        document.getElementById('search-result').innerHTML = `Search results for: ${searchQuery}`;
    }
});