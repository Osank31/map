// console.log("hello");

const socket = io("https://map-backend-knsb.onrender.com");

const geoOptions = {
    timeout: 5000,
    enableHighAccuracy: true
};

let map;
let markers = new Map();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("current_position", { latitude, longitude });

            if (!map) {
                map = L.map('map').setView([latitude, longitude], 13);

                L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?v=${new Date().getTime()}`, {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            } else {
                map.setView([latitude, longitude], 13);
            }
        },
        (error) => {
            console.error("Error getting location: ", error);
            alert("Unable to retrieve your location. Using default location.");
        },
        geoOptions
    );

    socket.on("recieve_location", (data) => {
        // console.log("Received location data:", data);
        data.forEach(userData => {
            const { socketId, latitude, longitude } = userData;

            if (markers[socketId]) {
                markers[socketId].setLatLng([latitude, longitude]);
            } else {
                const marker = L.marker([latitude, longitude]).addTo(map);
                marker.bindPopup(`User ID: ${socketId}`);
                markers.set(socketId, marker);
            }
        });
    });
} else {
    alert("Geolocation is not supported by this browser.");
}
