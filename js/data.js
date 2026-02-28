/*
   data.js
   Dummy Data schemas and initial state representing the Database
*/

const DummyData = {
    // Current logged in user context
    currentUser: null, // will be { id, role: 'citizen' | 'admin', name, ... }

    // System Config
    rewardRules: {
        pointsPerKg: 10,
        cleanBonus: 5,     // For ratings 4-5
        dirtyFine: -15,    // For ratings 1-2
        minimumPointsForRedemption: 100
    },

    // Partners where points can be redeemed
    partners: [
        { id: 'p1', name: 'Supplyco Supermarket', type: 'Government Subsidy Store', logo: 'fa-shopping-cart' },
        { id: 'p2', name: 'Maveli Store', type: 'Essential Goods', logo: 'fa-store' },
        { id: 'p3', name: 'KSRTC Bus Pass', type: 'Public Transport', logo: 'fa-bus' }
    ],

    // Users Database
    users: [
        {
            id: 'u1',
            role: 'citizen',
            username: 'rohit',
            password: 'password', // Demo only: cleartext password
            name: 'Rohit',
            address: 'Trivandrum',
            totalPoints: 150,
            totalFines: 0,
            joinDate: '2026-02-01'
        },
        {
            id: 'u2',
            role: 'citizen',
            username: 'priya',
            password: 'password',
            name: 'Priya',
            address: 'Kochi',
            totalPoints: 320,
            totalFines: 0,
            joinDate: '2026-02-05'
        },
        {
            id: 'u3',
            role: 'citizen',
            username: 'anjali',
            password: 'password',
            name: 'Anjali',
            address: 'Kollam',
            totalPoints: 45,
            totalFines: 0,
            joinDate: '2026-02-10'
        },
        {
            id: 'a1',
            role: 'admin',
            username: 'admin1',
            password: 'password',
            name: 'Haritha Kerala Supervisor',
            region: 'South Zone'
        }
    ],

    // Collection Logs Database
    collections: [
        {
            id: 'log1',
            userId: 'u1',
            date: '2026-02-15',
            weightKg: 2.5,
            materialType: 'Mixed Plastic (Clean)',
            cleanlinessRating: 5, // 1 to 5 (mapped from A)
            pointsAwarded: 30,    // (2.5 * 10) + 5 bonus
            fineAmount: 0,
            status: 'Verified',
            collectorId: 'vol_007'
        },
        {
            id: 'log2',
            userId: 'u1',
            date: '2026-02-22',
            weightKg: 1.0,
            materialType: 'Plastic Bottles (Clean)',
            cleanlinessRating: 4, // 1 to 5 (mapped from B)
            pointsAwarded: 15,    // (1.0 * 10) + 5
            fineAmount: 0,
            status: 'Verified',
            collectorId: 'vol_007'
        },
        {
            id: 'log3',
            userId: 'u2',
            date: '2026-02-10',
            weightKg: 5.0,
            materialType: 'Mixed Plastic (Clean)',
            cleanlinessRating: 5,  // 1 to 5 (mapped from A)
            pointsAwarded: 55,    // (5.0 * 10) + 5
            fineAmount: 0,
            status: 'Verified',
            collectorId: 'vol_012'
        },
        {
            id: 'log4',
            userId: 'u2',
            date: '2026-02-24',
            weightKg: 3.2,
            materialType: 'Mixed Plastic (Clean)',
            cleanlinessRating: 5, // 1 to 5 (mapped from A)
            pointsAwarded: 37,    // (3.2 * 10) + 5
            fineAmount: 0,
            status: 'Verified',
            collectorId: 'vol_003'
        },
        {
            id: 'log5',
            userId: 'u3',
            date: '2026-02-20',
            weightKg: 4.5,
            materialType: 'Mixed Waste (Unsegregated)',
            cleanlinessRating: 2, // 1 to 5 (mapped from C)
            pointsAwarded: 45,    // base rate without bonus for score 2? wait, if fine applies points=0
            fineAmount: 15,       // Penalty
            status: 'Flagged',
            collectorId: 'vol_015'
        }
    ],

    // Methods for State Management
    auth: {
        login: function (username, password, role) {
            const user = DummyData.users.find(u => u.username === username && u.password === password && u.role === role);
            if (user) {
                DummyData.currentUser = user;
                return true;
            }
            return false;
        },
        logout: function () {
            DummyData.currentUser = null;
        },
        isLoggedIn: function () {
            return DummyData.currentUser !== null;
        }
    },

    api: {
        getUserCollections: function (userId) {
            return DummyData.collections
                .filter(c => c.userId === userId)
                .sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        getAllCollections: function () {
            return [...DummyData.collections].sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        getUserDetails: function (userId) {
            const user = DummyData.users.find(u => u.id === userId);
            // Recalculate totals dynamically from logs to keep data consistent (Optional, but robust)
            const logs = this.getUserCollections(userId);
            const calculatedPoints = logs.reduce((sum, log) => sum + log.pointsAwarded, 0);
            const calculatedFines = logs.reduce((sum, log) => sum + log.fineAmount, 0);

            return {
                ...user,
                totalPoints: Math.max(0, calculatedPoints - calculatedFines), // Points subtract fines in total view
                grossPoints: calculatedPoints,
                totalFines: calculatedFines,
                logsCount: logs.length
            };
        },
        addCollection: function (data) {
            // Admin action to add new collection log
            const weight = parseFloat(data.weightKg);
            const rating = parseInt(data.cleanlinessRating);

            let points = 0;
            let fine = 0;

            // Apply business logic defined in rules
            if (rating >= 4) {
                points = Math.floor((weight * DummyData.rewardRules.pointsPerKg) + DummyData.rewardRules.cleanBonus);
            } else if (rating <= 2) {
                fine = Math.abs(DummyData.rewardRules.dirtyFine);
            } else {
                points = Math.floor(weight * DummyData.rewardRules.pointsPerKg);
            }

            const newLog = {
                id: 'log' + (DummyData.collections.length + 1),
                userId: data.userId,
                date: new Date().toISOString().split('T')[0], // Today
                weightKg: weight,
                materialType: data.materialType,
                cleanlinessRating: rating,
                pointsAwarded: points,
                fineAmount: fine,
                status: rating <= 2 ? 'Flagged' : 'Verified',
                collectorId: 'admin_entry'
            };

            DummyData.collections.push(newLog);
            return newLog;
        }
    }
};

window.db = DummyData; // Expose to global for vanilla JS access
