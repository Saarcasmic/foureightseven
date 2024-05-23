let currentIndex = 0; // Start with the first image as the default

function changeImage(element, newIndex) {
    const mainImage = document.getElementById('currentImage');
    const currentSrc = mainImage.src;
    const newSrc = element.src;

    if (newIndex > currentIndex) {
        mainImage.classList.add('slide-right');
        mainImage.classList.remove('slide-left');
    } else if (newIndex < currentIndex) {
        mainImage.classList.add('slide-left');
        mainImage.classList.remove('slide-right');
    }

    // Update current index after setting animation
    currentIndex = newIndex;

    // Ensure animation is seen by delaying src update slightly
    setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.classList.remove('slide-right', 'slide-left'); // Reset class to enable re-adding on next click
    }, 200); // A slight delay to ensure class is applied before changing source
}

// Set the first feature as active by default
document.addEventListener('DOMContentLoaded', () => {
    const firstFeature = document.querySelector('.thumbnail');
    changeImage(firstFeature); // Show content for the first feature
});

// Set the first feature as active by default
document.addEventListener('DOMContentLoaded', () => {
    const firstFeature = document.querySelector('.thumbnail');
    changeImage(firstFeature); // Show content for the first feature
});

// Set the first feature as active by default
document.addEventListener('DOMContentLoaded', () => {
    const firstFeature = document.querySelector('.thumbnail');
    changeImage(firstFeature); // Show content for the first feature
});



    const dropdown = document.querySelector(".dropdown");
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");
    
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open")
    })

options.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach(option => {
            option.classList.remove("active")
        })
        option.classList.add("active")
    })
})






function showDescription(element) {
    const content = JSON.parse(element.getAttribute('data-content'));
    const descriptionBox = document.getElementById('descriptionBox');
    descriptionBox.innerHTML = ''; // Clear existing content

    content.headings.forEach((heading, index) => {
        const headingElement = document.createElement('h2');
        headingElement.innerText = heading;
        descriptionBox.appendChild(headingElement);

        const paragraphElement = document.createElement('p');
        paragraphElement.innerText = content.paragraphs[index];
        descriptionBox.appendChild(paragraphElement);
    });

    // Remove the active class from all features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => feature.classList.remove('active'));

    // Add the active class to the clicked feature
    element.classList.add('active');
}

// Set the first feature as active by default
document.addEventListener('DOMContentLoaded', () => {
    const firstFeature = document.querySelector('.feature');
    showDescription(firstFeature); // Show content for the first feature
    firstFeature.classList.add('active');
});
