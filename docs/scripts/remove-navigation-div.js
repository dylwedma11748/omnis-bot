document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 768) {
        if (window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/commands/' || window.location.pathname === '/pricing/') {
            const sidebar = document.querySelector('.md-sidebar--primary');
            if (sidebar) {
                sidebar.remove();
            }
        }
    }
});
