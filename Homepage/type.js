// Example 1: Adding a dynamic greeting based on the time of day
document.addEventListener('DOMContentLoaded', (event) => {
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
    document.querySelector('header').appendChild(greeting);
});
