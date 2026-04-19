## Overview
This repository contains the source code for my professional portfolio website. It serves as a digital resume and project showcase, highlighting my expertise at the intersection of **Geomatics Engineering** and **Software Development**. 

The website features an interactive UI, including a "scrollytelling" projects showcase and a dynamic spatial map, reflecting my background in spatial data and web development.

## Features
* **Interactive Projects Showcase:** A scroll-triggered presentation of key academic and professional projects.
* **Spatial Integration:** An interactive web map built with Leaflet.js and styled with CartoDB Dark Matter tiles.
* **Dynamic UI Components:** Custom interactive tabs and scroll-zoom effects built with Vanilla JavaScript and CSS3.
* **Responsive Design:** Optimized layout for both desktop and mobile viewing.

## Technologies Used
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Mapping:** [Leaflet.js](https://leafletjs.com/)
* **Icons:** [FontAwesome 6](https://fontawesome.com/)
* **Map Tiles:** CartoDB Dark Matter

## Dependencies & Installation
This is a static frontend website. **There are no package managers (like npm or pip) or complex build steps required to run this project.** All external libraries (Leaflet and FontAwesome) are integrated via Content Delivery Networks (CDNs) directly within the HTML files.

### How to Run Locally
1. Clone or download the repository to your local machine.
2. Ensure the directory structure remains intact (HTML files must correctly reference `../css/` and `../js/` folders).
3. Open the `index.html` file in any modern web browser to view the site.
   * *Recommended:* To prevent potential CORS (Cross-Origin Resource Sharing) restrictions that some browsers enforce on local files, it is best to serve the files using a lightweight local web server. 
   * If you use **Visual Studio Code**, you can install the **Live Server** extension and click "Go Live". I found it best for debugging & testing
   * Alternatively, if you have Python installed, open your terminal in the project folder and run: `python -m http.server`

## File Structure
```text
/
├── index.html          # Landing page
├── aboutme.html        # Bio and skills
├── projects.html       # Scrolling (heavily inspired by Apple 😆) project showcase
├── contact.html        # Contact details and Leaflet map
├── css/
│   ├── style_index.css
│   ├── style_about.css
│   └── style_contact.css
├── js/
│   └── app.js          # Handles scroll effects and tab logic
└── pics/               # Contains images
