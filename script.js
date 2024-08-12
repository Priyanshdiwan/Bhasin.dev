document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const readMoreBtn = document.getElementById('readMoreBtn');

    contactBtn.addEventListener('click', () => {
    window.location.href = 'https://linktr.ee/priyansh_diwan';
});

    readMoreBtn.addEventListener('click', () => {
        alert('Hey! Your Website is Under Designing, you can check the progress once we start development! Will Keep You Posted :-)');
    });
});
