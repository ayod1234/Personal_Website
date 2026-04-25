let map;
let mapMode;
let mapMarker;



function toggleLightMode() {
    const body = document.body;
    const currentMode = body.getAttribute('data-mode') || 'dark';
    const modeToggleBtn = document.getElementById('modeToggle');

    if (currentMode === 'light') {
        body.setAttribute('data-mode', 'dark');
        if (modeToggleBtn) modeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-mode', 'light');
        if (modeToggleBtn) modeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Checks if document is loaded
// if loaded, it will run the code inside
// checks if menu icon and nav exist
// if they exist, it will add an event listener to the menu icon
// if the menu icon is clicked, it will toggle the active class on the nav
// and toggle the fa-xmark class on the menu icon
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggle');

    if (savedTheme === 'light') {
        body.setAttribute('data-mode', 'light');
        if (modeToggleBtn) modeToggleBtn.textContent = '☀️';
    } else {
        body.setAttribute('data-mode', 'dark');
        if (modeToggleBtn) modeToggleBtn.textContent = '🌙';
    }

    const menuIcon = document.querySelector('#menu-icon');
    const nav = document.querySelector('nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuIcon.classList.toggle('fa-xmark');
        });
    }

    // Hover Effects
    const toggleBtn = document.querySelector('#modeToggle');

    toggleBtn.addEventListener('mouseenter', () => {
        expandArrow();
    });
    toggleBtn.addEventListener('mouseleave', () => {
        shrinkArrow();
    });

});

function expandArrow() {
    const toggleBtn = document.getElementById('modeToggle');
    const body = document.body;
    if (body.getAttribute('data-mode') === 'light') {
        toggleBtn.textContent = '🌙';
        toggleBtn.style.transform = 'scale(1.5)'
        toggleBtn.style.transition = 'transform 0.5s ease';
    } else {
        toggleBtn.textContent = '☀️';
        toggleBtn.style.transform = 'scale(1.5)'
        toggleBtn.style.transition = 'transform 0.5s ease';
    }
}

function shrinkArrow() {
    const toggleBtn = document.getElementById('modeToggle');
    const body = document.body;
    if (body.getAttribute('data-mode') === 'light') {
        toggleBtn.textContent = '☀️';
        toggleBtn.style.transform = 'scale(1)'
        toggleBtn.style.transition = 'transform 0.5s ease';
    } else {
        toggleBtn.textContent = '🌙';
        toggleBtn.style.transform = 'scale(1)'
        toggleBtn.style.transition = 'transform 0.5s ease';
    }
}


// Takes in tab name as input
// Declares all variables
// Hides all tab-item elements
// Removes active class from all tab-btn elements
// Shows the current tab and adds active class to the button that opened the tab
// Checks if document is loaded
// if loaded, it will run the code inside
// checks if menu icon and nav exist
// if they exist, it will add an event listener to the menu icon
// if the menu icon is clicked, it will toggle the active class on the nav
// and toggle the fa-xmark class on the menu icon
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-item" and hide them
    tabcontent = document.getElementsByClassName("tab-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Adds an event listener to the window that listens for scroll events
// When the window is scrolled, it checks if the projects container is in view
// If the projects container is in view, it calculates the scroll progress
// If the scroll progress is between 0 and 1, it calculates the active slide
// If the active slide is between 0 and the total number of slides, it adds the active class to the active slide
// If the active slide is not between 0 and the total number of slides, it removes the active class from the active slide
window.addEventListener('scroll', () => {

    const projectsContainer = document.getElementById('projects-section');

    if (projectsContainer) {
        const rect = projectsContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress through the container (0 to 1)
        // rect.top is 0 when the container hits the top of the viewport
        let scrollProgress = -rect.top / (rect.height - windowHeight);

        // Clamp the value between 0 and 1 so it doesn't break before or after the section
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

        const slides = document.querySelectorAll('.project-slide');
        const totalSlides = slides.length;

        // Determine which slide should be active based on the scroll percentage
        let activeIndex = Math.floor(scrollProgress * totalSlides);

        // Prevent index out of bounds when scrollProgress is exactly 1
        if (activeIndex >= totalSlides) activeIndex = totalSlides - 1;

        // Loop through slides and update classes
        slides.forEach((slide, index) => {
            if (index === activeIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }


    const image = document.getElementById('scrollImage');
    if (image) {
        const imageContainer = image.parentElement;
        const imgRect = imageContainer.getBoundingClientRect();
        const winHeight = window.innerHeight;

        if (imgRect.top < winHeight && imgRect.bottom > 0) {
            const scrollFraction = Math.max(0, (winHeight - imgRect.top) / winHeight);
            const scaleValue = 0.5 + (scrollFraction * 1.0);
            const opacityValue = scrollFraction * 2;

            image.style.transform = `scale(${scaleValue})`;
            image.style.opacity = Math.min(1, opacityValue);
        }
    }
});



// Initializes the map
// Sets the view to Calgary
// Adds a tile layer to the map
// Adds a custom icon to the map
function initMap() {
    // Calgary Coordinates
    const calgaryCoords = [51.0447, -114.0719];

    // Initializes the map, set view to Calgary, zoom level 11 if it doesn't exist
    if (!map) {
        map = L.map('map').setView(calgaryCoords, 11);
    }

    // Removes the map layer if it exists
    if (mapMode) {
        map.removeLayer(mapMode);
    }

    // Checks if the map mode is light or dark
    if (document.body.getAttribute('data-mode') === 'light') {
        mapMode = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            subdomains: 'abcd',
            maxZoom: 20
        });
    } else {
        mapMode = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 20
        });
    }

    // Adds the right colour map type to the base layer
    mapMode.addTo(map);

    console.log("The current data mode is: " + document.body.getAttribute('data-mode'));


    // Custom Map Marker
    if (!mapMarker) {
        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: '<i class="fa-solid fa-location-dot"></i>',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });


        mapMarker = L.marker(calgaryCoords, { icon: customIcon }).addTo(map)
            .bindPopup('<b>Calgary, AB</b><br>Available for new opportunities.')
            .openPopup();
    }
}