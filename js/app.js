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