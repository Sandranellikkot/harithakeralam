/*
   components.js
   UI Component Factory using template literals to generate HTML blocks
*/

const UI = {
    // Generate an SVG Icon placeholder based on UX4G
    icon: (name, className = '') => `<i class="fa-solid ${name} ${className}"></i>`,

    // Create a stat card for dashboards
    statCard: (title, value, icon, colorClass) => `
        <div class="card stat-card hover-lift">
            <div class="stat-icon ${colorClass}">
                ${UI.icon(icon)}
            </div>
            <div class="stat-details">
                <h4>${title}</h4>
                <div class="value">${value}</div>
            </div>
        </div>
    `,

    // Generate a badge for statuses
    badge: (text, type) => `<span class="badge badge-${type}">${text}</span>`,

    // Table generator for collection logs
    collectionTable: (logs, role) => {
        if (!logs || logs.length === 0) {
            return `<div class="text-center p-4 text-tertiary">No collection records found.</div>`;
        }

        const rows = logs.map(log => {
            const dateStr = new Date(log.date).toLocaleDateString();
            const ratingStars = '★'.repeat(log.cleanlinessRating) + '☆'.repeat(5 - log.cleanlinessRating);
            const statusBadge = log.status === 'Verified' ? UI.badge('Verified', 'success') : UI.badge('Flagged', 'warn');

            // For admin, show who it belongs to
            const userCol = role === 'admin' ? `<td><span class="text-primary font-weight-bold">${log.userId}</span></td>` : '';

            return `
                <tr>
                    ${userCol}
                    <td>${dateStr}</td>
                    <td>${log.materialType}</td>
                    <td><b>${log.weightKg} kg</b></td>
                    <td class="text-warning">${ratingStars}</td>
                    <td class="text-success font-weight-bold">+${log.pointsAwarded}</td>
                    <td class="text-error">${log.fineAmount > 0 ? '-' + log.fineAmount : '0'}</td>
                    <td>${statusBadge}</td>
                </tr>
            `;
        }).join('');

        const userHead = role === 'admin' ? `<th>User ID</th>` : '';

        return `
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            ${userHead}
                            <th>Date</th>
                            <th>Material Type</th>
                            <th>Weight</th>
                            <th>Cleanliness</th>
                            <th>Points Awarded</th>
                            <th>Fines</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    },

    // Redemption Partners List
    partnersList: (partners) => {
        return partners.map(p => `
            <div class="card text-center hover-lift">
                 <div class="stat-icon primary mx-auto mb-3" style="width: 60px; height: 60px; font-size: 1.5rem;">
                    ${UI.icon(p.logo)}
                 </div>
                 <h4 class="text-primary mb-2">${p.name}</h4>
                 <p class="text-secondary small">${p.type}</p>
                 <button class="btn btn-outline btn-sm mt-3 w-100" onclick="app.showToast('Redemption portal opening soon!')">Redeem Points</button>
            </div>
        `).join('');
    },

    // Add New Log Form (Admin Only)
    adminAddLogForm: () => `
        <form id="addLogForm" onsubmit="app.handleAdminSubmit(event)">
            <div class="form-group">
                <label class="form-label">Citizen User ID</label>
                <input type="text" id="userId" class="form-control" required placeholder="e.g. c1">
            </div>
            
            <div class="form-group">
                <label class="form-label">Material Type Category</label>
                <select id="materialType" class="form-control" required>
                    <option value="Mixed Plastic">Mixed Plastic</option>
                    <option value="Plastic Bottles (Clean)">Plastic Bottles (Clean)</option>
                    <option value="Cardboard & Paper">Cardboard & Paper</option>
                    <option value="Mixed Waste (Unsegregated)">Mixed Waste (Unsegregated)</option>
                </select>
            </div>
            
            <div class="dashboard-grid" style="margin-bottom: 0;">
                <div class="form-group">
                    <label class="form-label">Weight (in Kg)</label>
                    <input type="number" step="0.1" min="0.1" id="weight" class="form-control" required placeholder="0.0">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Cleanliness Rating (1-5)</label>
                    <select id="rating" class="form-control" required>
                        <option value="5">5 - Excellent (Clean & Dry)</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor (Mixed with food waste)</option>
                        <option value="1">1 - Terrible (Hazardous/Unusable)</option>
                    </select>
                </div>
            </div>
            
            <div class="mt-4 flex-center">
                <button type="submit" class="btn btn-primary" style="width: 100%">Record Collection & Calculate Points</button>
            </div>
        </form>
    `
};

window.UI = UI;
