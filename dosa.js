
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('contact').value;

    const feedbackData = {
        name: name,
        email: email,
        contact: contact
    };

    // Store the feedback in localStorage
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedbackData);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    alert('Thank you for your feedback!');
    document.getElementById('feedbackForm').reset();
});
