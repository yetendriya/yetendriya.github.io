document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        const text = this.getAttribute('data-text');
        const description = document.getElementById('photo-description');
        description.innerText = text;
        description.style.opacity = 1;
    });

    item.addEventListener('mouseout', function () {
        const description = document.getElementById('photo-description');
        description.style.opacity = 0;
    });
});
