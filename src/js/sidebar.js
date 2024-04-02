const hamburgerIcon = document.getElementById('hamburger-icon');
const mobilePosts = document.getElementById('mobile-posts');
const overlay = document.querySelector('.overlay');

hamburgerIcon.addEventListener('click', function () {
    mobilePosts.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', function () {
    mobilePosts.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
});