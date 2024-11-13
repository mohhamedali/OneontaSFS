// Auto-slide functionality for the carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.opacity = i === index ? '1' : '0'; // Ensure visibility toggle
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds


// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function openCollage(collageId) {
    document.getElementById(collageId).style.display = "block";
}

function closeCollage(collageId) {
    document.getElementById(collageId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}
document.getElementById('viewAllBtn').addEventListener('click', function() {
    document.getElementById('allPhotosModal').style.display = 'block';
});

function closeCollage(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


// Array to hold image sources
const images = [
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400",
    "https://picsum.photos/id/1013/600/400"
    // Add more image URLs here
];

let currentImageIndex = 0;

// Function to open the lightbox with a specific image
function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightboxImg').src = images[currentImageIndex];
    document.getElementById('lightboxModal').style.display = 'block';
}

// Function to change images within the lightbox
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('lightboxImg').src = images[currentImageIndex];
}

// Close the lightbox modal
function closeCollage(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
