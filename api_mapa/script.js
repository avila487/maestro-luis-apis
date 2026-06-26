// Inicializar el mapa en coordenadas genéricas
var map = L.map('map').setView([0, 0], 2);

// Cargar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Usar la API de geolocalización
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Centrar el mapa en tu ubicación
    map.setView([lat, lon], 15);

    // Agregar un marcador en tu ubicación
    L.marker([lat, lon]).addTo(map)
      .bindPopup("¡Estás aquí!")
      .openPopup();
  }, function() {
    alert("No se pudo obtener tu ubicación.");
  });
} else {
  alert("La geolocalización no está soportada en este navegador.");
}
