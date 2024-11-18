document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('player-name').value;
    const contact = document.getElementById('contact').value;

    if (playerName && contact) {
        document.getElementById('payment-popup').style.display = 'flex';
    } else {
        alert("Please fill out all fields before submitting.");
    }
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('payment-confirmation-popup').style.display = 'flex';
    document.getElementById('payment-popup').style.display = 'none';
});

document.getElementById('confirm-yes').addEventListener('click', function() {
    document.getElementById('registration-form').submit();
    document.getElementById('contact-popup').style.display = 'flex';
    document.getElementById('payment-confirmation-popup').style.display = 'none';
});

document.getElementById('confirm-no').addEventListener('click', function() {
    document.getElementById('payment-confirmation-popup').style.display = 'none';
});

document.getElementById('close-contact-popup').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'none';
});