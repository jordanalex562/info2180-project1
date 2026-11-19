/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red"; 
        } else {
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
            messageDiv.style.color = "black"; 
            form.reset();
        }
    });
});