// Open modal when the image is clicked
function openModal(element) {
    document.getElementById("certModal").style.display = "block";
    document.getElementById("modalImg").src = element.src;
    document.getElementById("caption").innerHTML = element.alt;
}

// Close modal when clicking on the close button or outside the image
function closeModal() {
    document.getElementById("certModal").style.display = "none";
}
