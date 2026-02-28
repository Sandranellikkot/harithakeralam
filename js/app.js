/*
   app.js
   Main Application Controller - Handles routing, state updates, and DOM manipulation
*/

class AppController {
    constructor() {
        this.container = document.getElementById('app-container');
        this.toastContainer = document.getElementById('toast-container');
        this.navMenu = document.getElementById('nav-menu');
        this.navAuthSection = document.getElementById('nav-auth-section');
        this.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

        this.init();
    }

    init() {
        // Setup Mobile Menu
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('show');
            });
        }

        // Handle initial routing based on hash or default to home
        const initialRoute = window.location.hash.replace('#', '') || 'home';
        this.navigate(initialRoute);

        // Listen to hash changes for browser back/forward buttons
        window.addEventListener('hashchange', () => {
            const route = window.location.hash.replace('#', '') || 'home';
            this.navigate(route, true);
        });
    }

    // Main Router
    navigate(route, isHistoryEvent = false) {
        // Close mobile menu on navigate
        this.navMenu.classList.remove('show');

        // Trigger exit animation
        this.container.style.opacity = '0';

        setTimeout(() => {
            if (!isHistoryEvent) window.location.hash = route;
            this.renderView(route);
            // Trigger enter animation
            this.container.classList.remove('page-transition-enter');
            void this.container.offsetWidth; // Trigger reflow
            this.container.classList.add('page-transition-enter');
            this.container.style.opacity = '1';
            window.scrollTo(0, 0);
        }, 200); // Wait for fade out
    }

    // Render logical views based on route and auth state
    renderView(route) {
        this.updateNavUI();

        // Auth Guards
        if ((route === 'citizen-dashboard' || route === 'admin-dashboard') && !db.auth.isLoggedIn()) {
            this.showToast('Please login to access the dashboard', 'error');
            this.navigate('home');
            return;
        }

        switch (route) {
            case 'home':
                this.container.innerHTML = Views.home();
                break;
            case 'about':
                this.container.innerHTML = Views.about();
                break;
            case 'rewards':
                this.container.innerHTML = Views.rewards();
                break;
            case 'login-citizen':
                if (db.auth.isLoggedIn()) { this.navigate(db.currentUser.role === 'citizen' ? 'citizen-dashboard' : 'admin-dashboard'); return; }
                this.container.innerHTML = Views.login('citizen');
                break;
            case 'login-admin':
                if (db.auth.isLoggedIn()) { this.navigate(db.currentUser.role === 'admin' ? 'admin-dashboard' : 'citizen-dashboard'); return; }
                this.container.innerHTML = Views.login('admin');
                break;
            case 'citizen-dashboard':
                // Extra guard just in case
                if (db.currentUser.role !== 'citizen') { this.navigate('home'); return; }
                this.container.innerHTML = Views.citizenDashboard();
                break;
            case 'admin-dashboard':
                if (db.currentUser.role !== 'admin') { this.navigate('home'); return; }
                this.container.innerHTML = Views.adminDashboard();
                break;
            default:
                this.container.innerHTML = `
                    <div class="container text-center py-6">
                        <div class="stat-icon danger mx-auto mb-4" style="width: 80px; height:80px; font-size: 2rem;">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <h2>Page Not Found</h2>
                        <button class="btn btn-primary mt-4" onclick="app.navigate('home')">Return Home</button>
                    </div>`;
        }

        // Update active nav links
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(route)) {
                item.classList.add('active');
            }
        });
    }

    // Updates top navigation based on login status
    updateNavUI() {
        if (db.auth.isLoggedIn()) {
            const dashboardRoute = db.currentUser.role === 'admin' ? 'admin-dashboard' : 'citizen-dashboard';
            const icon = db.currentUser.role === 'admin' ? 'fa-shield-halved' : 'fa-user';
            this.navAuthSection.innerHTML = `
                <button class="btn btn-outline" onclick="app.navigate('${dashboardRoute}')">
                    <i class="fa-solid ${icon}"></i> Dashboard
                </button>
                <button class="btn btn-secondary" onclick="app.logout()">
                    Logout
                </button>
            `;
        } else {
            this.navAuthSection.innerHTML = `
                <button class="btn btn-outline" onclick="app.navigate('login-admin')"><i class="fa-solid fa-user-tie"></i> Admin Portal</button>
                <button class="btn btn-primary" onclick="app.navigate('login-citizen')"><i class="fa-solid fa-user"></i> Citizen Login</button>
            `;
        }
    }

    // Form Handlers
    handleLogin(e, role) {
        e.preventDefault();
        const userField = document.getElementById('username').value;
        const passField = document.getElementById('password').value;

        if (db.auth.login(userField, passField, role)) {
            this.showToast('Login successful!', 'success');
            if (role === 'admin') {
                this.navigate('admin-dashboard');
            } else {
                this.navigate('citizen-dashboard');
            }
        } else {
            this.showToast('Invalid credentials. Please try again.', 'error');
        }
    }

    logout() {
        db.auth.logout();
        this.showToast('Logged out successfully', 'success');
        this.navigate('home');
    }

    // Admin Handlers
    handleAdminSubmit(e) {
        e.preventDefault();

        const data = {
            userId: document.getElementById('userId').value,
            materialType: document.getElementById('materialType').value,
            weightKg: document.getElementById('weight').value,
            cleanlinessRating: document.getElementById('rating').value
        };

        // Basic validation - check if user exists
        const userExists = db.users.find(u => u.id === data.userId && u.role === 'citizen');
        if (!userExists) {
            this.showToast('Error: Citizen User ID not found in system.', 'error');
            return;
        }

        const newLog = db.api.addCollection(data);

        this.closeModal('addLogModal');
        this.showToast(`Success! Recorded collection. Awarded ${newLog.pointsAwarded} pts, ${newLog.fineAmount} fines.`, 'success');
        this.renderView('admin-dashboard'); // Re-render to show updated table
    }

    // UI Helpers (Modals & Toasts)
    openModal(id) {
        document.getElementById(id).classList.add('active');
    }

    closeModal(id) {
        document.getElementById(id).classList.remove('active');
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check text-success"></i>' : '<i class="fa-solid fa-circle-exclamation text-error"></i>';

        toast.innerHTML = `
            ${icon}
            <div>
                <strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                <p style="margin:0; font-size: 0.875rem; color: var(--text-secondary);">${message}</p>
            </div>
        `;

        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
}

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AppController();
});
