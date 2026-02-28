/*
   views.js
   Page View components (Home, Login, Citizen Dashboard, Admin Dashboard)
*/

const Views = {
    // ------------------------------------------------------------------------
    // Reward Partners View
    // ------------------------------------------------------------------------
    rewards: () => `
        <section class="page-header text-center py-6" style="padding-bottom: 4rem;">
            <div class="container relative z-10">
                <div class="mb-4" style="font-size: 3rem; color: var(--primary-light);"><i class="fa-solid fa-handshake"></i></div>
                <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Our Reward Partners</h2>
                <p class="text-lg mb-6" style="margin: 0 auto; max-width: 800px;">Redeem your Sacha Points at our trusted government and cooperative partners. 1 Point equals ₹1 in value.</p>
            </div>
        </section>

        <section class="py-6 bg-white">
            <div class="container">
                <div class="dashboard-grid">
                    <!-- Supplyco -->
                    <div class="card hover-lift text-center">
                        <div class="stat-icon primary mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem;">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-primary mb-2">Supplyco Supermarkets</h3>
                        <p class="text-secondary mb-4">Redeem points for Sabari brand products, subsidized groceries, and essential commodities across Kerala.</p>
                        <span class="badge badge-success">Active Partner</span>
                    </div>

                    <!-- Maveli Stores -->
                    <div class="card hover-lift text-center">
                        <div class="stat-icon success mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem;">
                            <i class="fa-solid fa-store"></i>
                        </div>
                        <h3 class="text-primary mb-2">Maveli Stores</h3>
                        <p class="text-secondary mb-4">Use your points to purchase daily necessities at highly subsidized rates at any Maveli store in your panchayat.</p>
                        <span class="badge badge-success">Active Partner</span>
                    </div>

                    <!-- KSRTC -->
                    <div class="card hover-lift text-center">
                        <div class="stat-icon warning mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem; color: #B4851B; background-color: var(--warning-light);">
                            <i class="fa-solid fa-bus"></i>
                        </div>
                        <h3 class="text-primary mb-2">KSRTC</h3>
                        <p class="text-secondary mb-4">Soon you will be able to use your Sacha Points to book KSRTC bus tickets and monthly travel passes.</p>
                        <span class="badge badge-warning">Coming Soon</span>
                    </div>
                    
                    <!-- KSEB -->
                    <div class="card hover-lift text-center">
                        <div class="stat-icon danger mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem; color: var(--error-color); background-color: var(--error-light);">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="text-primary mb-2">KSEB</h3>
                        <p class="text-secondary mb-4">In the future, households can pay their electricity bills using the points earned through responsible waste disposal.</p>
                        <span class="badge badge-warning">Coming Soon</span>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-6 bg-light text-center">
            <div class="container">
                <h3 class="text-primary mb-2">Ready to redeem?</h3>
                <p class="text-secondary mb-4">Log in to your citizen portal to view your balance and generate redemption codes.</p>
                <button class="btn btn-primary btn-lg" onclick="app.navigate('login-citizen')">Go to Dashboard</button>
            </div>
        </section>
    `,

    // ------------------------------------------------------------------------
    // Schemes / About Page View
    // ------------------------------------------------------------------------
    about: () => `
        <section class="page-header text-center py-6" style="padding-bottom: 4rem;">
            <div class="container relative z-10">
                <div class="mb-4" style="font-size: 3rem; color: var(--warning-color);"><i class="fa-solid fa-hand-holding-heart"></i></div>
                <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Government Schemes & Initiatives</h2>
                <p class="text-lg mb-6" style="margin: 0 auto; max-width: 800px;">Learn about the Haritha Karma Sena guidelines, waste collection policies, and our partner subsidy programs designed to clean Kerala and reward its citizens.</p>
            </div>
        </section>

        <section class="py-6 bg-white">
            <div class="container">
                <div class="dashboard-grid">
                    <!-- Haritha Karma Sena Scheme -->
                    <div class="card hover-lift">
                        <div class="flex-between mb-4">
                            <span class="badge badge-success"><i class="fa-solid fa-leaf"></i> Haritha Karma Sena</span>
                        </div>
                        <h3 class="text-primary" style="font-size: 1.5rem; margin-bottom: 0.5rem;">Door-to-door Collection</h3>
                        <p class="text-secondary mb-4">The Haritha Karma Sena (HKS) is a dedicated task force of trained volunteers. They collect non-biodegradable waste from households and establishments on a monthly basis, ensuring a structured approach to environmental sanitation across local self-government institutions (LSGIs).</p>
                        <h4 style="font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 0.5rem;"><i class="fa-solid fa-clipboard-check text-success"></i> Guidelines</h4>
                        <ul class="text-secondary" style="padding-left: 1.5rem; list-style-type: disc;">
                            <li style="margin-bottom: 0.25rem;">Plastics must be washed, dried, and stored.</li>
                            <li style="margin-bottom: 0.25rem;">Segregate e-waste and glass elements separately.</li>
                            <li style="margin-bottom: 0.25rem;">Pay the mandatory user fee for sustainable operations.</li>
                        </ul>
                    </div>

                    <!-- Incentive Scheme -->
                    <div class="card hover-lift">
                        <div class="flex-between mb-4">
                            <span class="badge badge-warning"><i class="fa-solid fa-coins"></i> SachaKeralam Rewards</span>
                        </div>
                        <h3 class="text-primary" style="font-size: 1.5rem; margin-bottom: 0.5rem;">Cleanliness Incentives</h3>
                        <p class="text-secondary mb-4">To promote excellent waste segregation, households receive "Sacha Points" when Haritha Karma Sena volunteers successfully collect clean, neatly segregated plastic waste. Dirty or mixed waste may attract fines.</p>
                        <div style="background-color: var(--warning-light); padding: 1rem; border-radius: var(--border-radius-sm); border-left: 4px solid var(--warning-color);">
                            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.25rem;">Point Value</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">Currently, 1 Sacha Point is equivalent to ₹1 in purchasing power at listed Government stores.</p>
                        </div>
                    </div>

                    <!-- Supplyco / Maveli Integration -->
                    <div class="card hover-lift">
                        <div class="flex-between mb-4">
                            <span class="badge" style="background-color: var(--primary-light); color: white;"><i class="fa-solid fa-store"></i> Partner Stores</span>
                        </div>
                        <h3 class="text-primary" style="font-size: 1.5rem; margin-bottom: 0.5rem;">Supplyco & Maveli Integration</h3>
                        <p class="text-secondary mb-4">The Kerala State Civil Supplies Corporation (Supplyco) and Maveli stores accept Sacha Points as a direct subsidy towards your grocery bills. Redeem points directly from your citizen dashboard at checkout.</p>
                        <h4 style="font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 0.5rem;"><i class="fa-solid fa-bag-shopping" style="color: var(--primary-color);"></i> Eligible Goods</h4>
                        <ul class="text-secondary" style="padding-left: 1.5rem; list-style-type: disc;">
                            <li style="margin-bottom: 0.25rem;">Subsidized Rice & Wheat</li>
                            <li style="margin-bottom: 0.25rem;">Pulses and Spices</li>
                            <li style="margin-bottom: 0.25rem;">Sabari brand household items</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-6 bg-light text-center">
            <div class="container">
                <h3 class="text-primary mb-2">Want to become a top contributor?</h3>
                <p class="text-secondary mb-4">Ensure your waste is completely dry and segregated to earn bonus Sacha points each month.</p>
                <button class="btn btn-primary btn-lg" onclick="app.navigate('login-citizen')">Check My Points</button>
            </div>
        </section>
    `,

    // ------------------------------------------------------------------------
    // Home Page View
    // ------------------------------------------------------------------------
    home: () => `
        <!-- Hero Section -->
        <section class="page-header text-center py-6" style="padding-bottom: 6rem;">
            <div class="container relative z-10">
                <div class="mb-4" style="font-size: 3rem; color: var(--success-light);"><i class="fa-solid fa-leaf"></i></div>
                <h2 style="font-size: 3rem; font-weight: 800; margin-bottom: 1rem;">HarithaKeralam</h2>
                <p class="text-lg mb-6" style="margin: 0 auto; max-width: 800px;">Transforming waste into wealth. Segregate your plastic waste, earn reward points, and redeem them at government subsidy stores like Supplyco and Maveli.</p>
                
                <div class="flex-center" style="gap: 1rem; margin-top: 2rem;">
                    <button class="btn btn-secondary btn-lg" onclick="app.navigate('login-citizen')" style="padding: 1rem 2rem; font-size: 1.1rem;">
                        <i class="fa-solid fa-user"></i> Citizen Portal
                    </button>
                    <button class="btn btn-outline" style="color: white; border-color: white; padding: 1rem 2rem; font-size: 1.1rem;" onclick="app.navigate('login-admin')">
                        <i class="fa-solid fa-shield-halved"></i> Admin Access
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-6 bg-white">
            <div class="container">
                <div class="text-center mb-6">
                    <span class="badge badge-success mb-2">How it works</span>
                    <h3 class="text-primary" style="font-size: 2rem;">A Structured Approach to Waste Management</h3>
                </div>
                
                <div class="dashboard-grid">
                    <div class="card hover-lift text-center">
                        <div class="stat-icon success mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem;">
                            <i class="fa-solid fa-trash-can-arrow-up"></i>
                        </div>
                        <h4 class="text-primary mb-2">1. Segregate & Store</h4>
                        <p class="text-secondary text-sm">Clean, dry, and store your plastic waste at home. Segregation is key to effective recycling and higher rewards.</p>
                    </div>
                    
                    <div class="card hover-lift text-center">
                        <div class="stat-icon primary mx-auto mb-4" style="width: 80px; height: 80px; font-size: 2rem;">
                            <i class="fa-solid fa-truck-fast"></i>
                        </div>
                        <h4 class="text-primary mb-2">2. Periodic Collection</h4>
                        <p class="text-secondary text-sm">Haritha Karma Sena volunteers collect it periodically. They grade the waste based on cleanliness and segregation quality.</p>
                    </div>
                    
                    <div class="card hover-lift text-center">
                        <div class="stat-icon" style="background-color: var(--secondary-light); color: #B4851B; margin: 0 auto; margin-bottom: 1.5rem; width: 80px; height: 80px; font-size: 2rem;">
                            <i class="fa-solid fa-coins"></i>
                        </div>
                        <h4 class="text-primary mb-2">3. Earn Rewards</h4>
                        <p class="text-secondary text-sm">Get points for good quality waste. Redeem them at Supplyco/Maveli stores. Poor quality waste attracts strict fines.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Reward Scheme Info -->
        <section class="py-6 bg-light">
             <div class="container">
                <div class="card border-0" style="background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white;">
                    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem;">
                        <div style="flex: 1; min-width: 300px;">
                            <h3 style="color: white; margin-bottom: 1rem;"><i class="fa-solid fa-gift text-warning mr-2"></i> Current Reward Scheme</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-check text-success mr-2" style="background: white; border-radius: 50%; padding: 4px;"></i> Base Rate: <b>${db.rewardRules.pointsPerKg} Points / Kg</b></li>
                                <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-star text-warning mr-2" style="background: white; border-radius: 50%; padding: 4px;"></i> Cleanliness Bonus: <b>+${db.rewardRules.cleanBonus} Points</b></li>
                                <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-xmark text-error mr-2" style="background: white; border-radius: 50%; padding: 4px;"></i> Untidy Waste Fine: <b>${db.rewardRules.dirtyFine} Points</b></li>
                            </ul>
                            <div class="mt-4">
                                <span class="badge badge-warning" style="font-size: 0.8rem;">1 Point = ₹1 at Government Stores</span>
                            </div>
                        </div>
                        <div style="flex: 1; text-align: center; min-width: 300px;">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Supplyco_logo.svg/1200px-Supplyco_logo.svg.png" alt="Supplyco" style="max-height: 80px; opacity: 0.9; margin: 10px; background: white; padding: 10px; border-radius: 8px;">
                             <div class="mt-2" style="opacity: 0.8; font-size: 0.9rem;">Official Redemption Partners</div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    `,

    // ------------------------------------------------------------------------
    // Login Views (Citizen & Admin sharing one template base)
    // ------------------------------------------------------------------------
    login: (role) => `
        <div class="container py-6 flex-center" style="min-height: calc(100vh - 200px);">
            <div class="card" style="width: 100%; max-width: 450px;">
                <div class="text-center mb-5">
                    <div class="logo-icon mx-auto mb-3" style="width: 60px; height: 60px; font-size: 1.5rem; ${role === 'admin' ? 'background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); box-shadow: 0 4px 10px rgba(15, 76, 129, 0.3);' : ''}">
                        <i class="fa-solid ${role === 'admin' ? 'fa-shield-halved' : 'fa-leaf'}"></i>
                    </div>
                    <h2 class="text-primary">${role === 'admin' ? 'Department Portal' : 'Citizen Portal'}</h2>
                    <p class="text-secondary">Sign in to manage waste collection ${role === 'admin' ? 'records' : 'and rewards'}</p>
                </div>
                
                <form id="loginForm" onsubmit="app.handleLogin(event, '${role}')">
                    <div class="form-group">
                        <label class="form-label" for="username">Username / ID</label>
                        <div style="position: relative;">
                            <i class="fa-solid fa-user" style="position: absolute; left: 1rem; top: 1rem; color: var(--text-tertiary);"></i>
                            <input type="text" id="username" class="form-control" style="padding-left: 2.5rem;" required placeholder="Enter your ID">
                        </div>
                        <small class="text-tertiary mt-1" style="display:block;">Demo ${role === 'admin' ? 'Admin: admin1' : 'Citizen: rohit, priya, or anjali'}</small>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <div style="position: relative;">
                            <i class="fa-solid fa-lock" style="position: absolute; left: 1rem; top: 1rem; color: var(--text-tertiary);"></i>
                            <input type="password" id="password" class="form-control" style="padding-left: 2.5rem;" required placeholder="Enter password (password)">
                        </div>
                    </div>
                    
                    <button type="submit" class="btn ${role === 'admin' ? 'btn-primary' : 'btn-success'} w-100 mt-4" style="width:100%; padding: 0.75rem;">
                        Secure Login <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </form>
            </div>
        </div>
    `,

    // ------------------------------------------------------------------------
    // Citizen Dashboard View
    // ------------------------------------------------------------------------
    citizenDashboard: () => {
        const user = db.api.getUserDetails(db.currentUser.id);
        const logs = db.api.getUserCollections(user.id);

        return `
        <div class="page-header" style="padding: 2rem 0;">
            <div class="container flex-between" style="flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h2 style="font-size: 1.75rem; margin-bottom: 0.25rem;">Welcome, ${user.name}</h2>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">${user.address} | ID: ${user.id}</p>
                </div>
                <div>
                    <button class="btn btn-outline" style="color: white; border-color: rgba(255,255,255,0.3);" onclick="app.logout()">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
            </div>
        </div>
        
        <div class="container py-4">
            <!-- KPIs -->
            <div class="dashboard-grid">
                ${UI.statCard('Available Reward Points', user.totalPoints, 'fa-star', 'success')}
                ${UI.statCard('Total Fines (Penalty)', user.totalFines > 0 ? `<span class="text-error">- ${user.totalFines}</span>` : '0', 'fa-triangle-exclamation', user.totalFines > 0 ? 'danger' : 'primary')}
                ${UI.statCard('Total Collections', user.logsCount, 'fa-truck-fast', 'primary')}
            </div>

            <!-- Main Content Area -->
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-6); margin-top: var(--spacing-6);">
                
                <!-- Left Col: History -->
                <div style="min-width: 0;">
                    <div class="card mb-6">
                        <div class="card-header">
                            <h3 class="card-title">My Collection History</h3>
                            <button class="btn btn-outline btn-sm">Download Report</button>
                        </div>
                        ${UI.collectionTable(logs, 'citizen')}
                    </div>
                </div>
                
                <!-- Right Col: Rewards & Tips -->
                <div>
                    <div class="card mb-6" style="background: var(--success-light); border: 1px solid var(--success-color);">
                        <div class="card-header" style="border-bottom: none; padding-bottom: 0;">
                            <h3 class="card-title text-success"><i class="fa-solid fa-gift mr-2"></i> Redeem Points</h3>
                        </div>
                        <div class="mt-4">
                            ${UI.partnersList(db.partners)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    // ------------------------------------------------------------------------
    // Admin Dashboard View
    // ------------------------------------------------------------------------
    adminDashboard: () => {
        const user = db.currentUser;
        const allLogs = db.api.getAllCollections();

        // Compute Some basic stats
        const totalKg = allLogs.reduce((sum, log) => sum + log.weightKg, 0).toFixed(1);
        const totalPointsIssued = allLogs.reduce((sum, log) => sum + log.pointsAwarded, 0);
        const totalFinesImposed = allLogs.reduce((sum, log) => sum + log.fineAmount, 0);

        return `
        <div class="page-header" style="padding: 2rem 0; background-color: var(--primary-dark);">
            <div class="container flex-between" style="flex-wrap: wrap; gap: 1rem;">
                <div>
                    <span class="badge badge-warning mb-2">Government Portal Zone</span>
                    <h2 style="font-size: 1.75rem; margin-bottom: 0.25rem;">Command Center</h2>
                    <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Admin: ${user.name} | ${user.region}</p>
                </div>
                <div>
                    <button class="btn btn-outline" style="color: white; border-color: rgba(255,255,255,0.3);" onclick="app.logout()">
                        <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </button>
                </div>
            </div>
        </div>
        
        <div class="container py-4">
            <!-- KPIs -->
            <div class="dashboard-grid mb-6">
                ${UI.statCard('Total Waste Collected', totalKg + ' kg', 'fa-weight-scale', 'primary')}
                ${UI.statCard('Reward Points Issued', totalPointsIssued, 'fa-star', 'success')}
                ${UI.statCard('Fines Imposed', totalFinesImposed, 'fa-gavel', 'danger')}
            </div>

            <!-- Operations -->
            <div class="card mb-6" style="border-top: 4px solid var(--primary-color);">
                 <div class="card-header">
                    <h3 class="card-title">Update Collection Data</h3>
                    <button class="btn btn-primary" onclick="app.openModal('addLogModal')"><i class="fa-solid fa-plus mr-2"></i> New Entry</button>
                </div>
                <p class="text-secondary">Click the "New Entry" button to record a new waste collection from a household.</p>
            </div>

            <!-- Ledger Database -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Global Collection Ledger</h3>
                    <div class="flex-center gap-2">
                        <select class="form-control" style="width: auto; padding: 0.25rem 0.5rem; height: auto;">
                            <option>All Zones</option>
                            <option>South Zone</option>
                        </select>
                        <button class="btn btn-outline btn-sm"><i class="fa-solid fa-filter"></i></button>
                    </div>
                </div>
                ${UI.collectionTable(allLogs, 'admin')}
            </div>
        </div>
        
        <!-- Add Log Modal -->
        <div class="modal-overlay" id="addLogModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="text-primary m-0">Record Collection Data</h3>
                    <button class="btn-close" onclick="app.closeModal('addLogModal')"><i class="fa-solid fa-xmark"></i></button>
                </div>
                ${UI.adminAddLogForm()}
            </div>
        </div>
        `;
    }
};

window.Views = Views;
