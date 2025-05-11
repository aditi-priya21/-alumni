// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Function to update navigation based on login status
function updateNavigation() {
    const buttonWrap = document.querySelector('.buttonwrap');
    if (buttonWrap) {
        if (isLoggedIn()) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            buttonWrap.innerHTML = `
                <span class="user-name">Welcome, ${currentUser.fullName}</span>
                <button class="logout-btn" onclick="logout()">Logout</button>
            `;
        } else {
            buttonWrap.innerHTML = `
                <button class="createbtn selectedbtn">CREATE</button>
                <button class="createbtn">SIGN IN</button>
            `;
            // Reattach event listeners
            attachButtonListeners();
        }
    }
}

// Function to handle logout
function logout() {
    localStorage.removeItem('currentUser');
    updateNavigation();
    window.location.href = 'index.html';
}

// Function to handle login
function handleLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            fullName: user.fullName,
            email: user.email
        }));
        updateNavigation();
        return true;
    }
    return false;
}

// Function to handle signup
function handleSignup(fullName, email, password, confirmPassword) {
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match!' };
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        return { success: false, message: 'Email already registered!' };
    }

    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, message: 'Account created successfully!' };
}

// Function to attach button listeners
function attachButtonListeners() {
    const button = document.querySelectorAll('.createbtn.selectedbtn');
    const button2 = document.querySelectorAll('.createbtn');

    button2.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = "index2.html";
        });
    });

    button.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = "index3.html";
        });
    });
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
}); 