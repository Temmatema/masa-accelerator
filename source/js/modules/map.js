/* eslint-disable no-undef */
let markerSize;

if (window.innerWidth <= 767) {
  markerSize = [24, 24];
} else if (window.innerWidth <= 1199) {
  markerSize = [40, 40];
} else {
  markerSize = [50, 50];
}

if (document.getElementById('map')) {
  let map = L.map('map').setView([55.02858471331637, 82.92812299994901], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map);

  let mapIcon = L.icon({
    iconUrl: './img/marker.svg',
    iconSize: markerSize,
  });

  // eslint-disable-next-line no-unused-vars
  let marker = L.marker([55.02888471331637, 82.92812299994901], {
    icon: mapIcon,
  }).addTo(map);

  map.scrollWheelZoom.disable();
}
