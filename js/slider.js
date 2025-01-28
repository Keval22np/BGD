// Get necessary elements
const sliderInner = document.querySelector('.slider-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slides = []; // Initialize an empty array to store slides

// Function to load images from a folder (adjust the path as needed)
const loadSliderImages = () => {
    const imageFolder = 'images/slider/'; // Path to your slider images

    for (let i = 1; i <= 3; i++) { // Adjust this based on the number of images
        const img = document.createElement('img');
        img.src = imageFolder + 'slider' + i + '.jpg';
        img.alt = 'Slider Image ' + i;
        sliderInner.appendChild(img);
    }

    // Get slides AFTER appending them to the DOM
    slides = sliderInner.children;
};

// Function to translate the slider
const translateSlider = () => {
    sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to handle next slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    translateSlider();
}

// Function to handle previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    translateSlider();
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatic sliding (optional)
let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Stop auto-sliding on hover
sliderInner.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-sliding on mouse leave
sliderInner.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000);
});

// Load images and initialize slider
loadSliderImages();
translateSlider();