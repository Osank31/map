# Map Example

## Overview

This project is a web application that uses Leaflet to display a map where users can view their current location in real-time. The application integrates with a backend server via WebSocket to share location data with other users.

## Features

- Real-time location tracking using the browser's Geolocation API.
- Integration with Leaflet for an interactive map interface.
- Dynamic markers for multiple users, displaying their locations on the map.
- Automatic updates to user positions.

## Technologies Used

- **HTML/CSS**: Basic structure and styling of the web page.
- **JavaScript**: Logic for geolocation, WebSocket communication, and Leaflet map management.
- **Leaflet**: A JavaScript library for interactive maps.
- **Socket.IO**: For real-time bidirectional communication between clients and the server.

## Getting Started

### Prerequisites

- A modern web browser that supports the Geolocation API.
- Internet connection for loading Leaflet and Socket.IO libraries.

### Installation

1. Clone the repository or download the HTML and JavaScript files.
2. Open the `index.html` file in your web browser.

### Usage

1. When you load the page, the application will request permission to access your location.
2. Upon granting permission, your current location will be displayed on the map.
3. The map will update as you move, and other connected users' locations will also appear.

## Code Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `script.js`: The JavaScript file that handles geolocation, socket communication, and map interactions.

## Contributing

Feel free to submit issues or fork the repository and create pull requests for enhancements or bug fixes.

## License

This project is open-source and available for modification and redistribution. Please adhere to best practices and provide attribution where necessary.

## Acknowledgments

- [Leaflet](https://leafletjs.com) for the mapping library.
- [Socket.IO](https://socket.io) for real-time communication capabilities.
- OpenStreetMap for providing the map tiles. 

## Contact

For further questions or feedback, please reach out via [your email or contact method].