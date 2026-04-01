// Initialize the map
const map = L.map('map').setView([6.5244, 3.3792], 13); // Centered on Lagos, Nigeria by default

// Use a dark-themed map tile (CartoDB Dark Matter)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example Marker
L.marker([6.5244, 3.3792]).addTo(map)
    .bindPopup('Ayooluwa\'s HQ')
    .openPopup();