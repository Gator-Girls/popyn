<template>
  <div class="map-container">
    <div id="map" ref="map" class="map"></div>
  </div>
</template>

<script>
// import { db } from "./main";
export default {
  name: "MapContainer",
  data() {
    return {
      places: [
        {
          name: "Arcade Bar",
          lat: 29.6521194,
          lng: -82.3247243,
          address: "6 E University Ave, Gainesville, FL 32601, USA",
        },
        {
          name: "JJ's Tavern",
          lat: 29.6524179,
          lng: -82.3463849302915,
          address: "1702 W University Ave Suite G, Gainesville, FL 32603, USA",
        },
        {
          name: "High Dive",
          lat: 29.6504336,
          lng: -82.32697979999999,
          address: "210 SW 2nd Ave, Gainesville, FL 32601, USA",
        },
        {
          name: "The Social at Midtown",
          lat: 29.6525821,
          lng: -82.34561149999999,
          address: "1728 W University Ave, Gainesville, FL 32603, USA",
        },
        {
          name: "The Backyard at Boca Fiesta & Palomino",
          lat: 29.6494382,
          lng: -82.32434510000002,
          address: "232 1/2, SE 1st St, Gainesville, FL 32601, USA",
        },
        {
          name: "FAT DADDY'S",
          lat: 29.6524179,
          lng: -82.345129,
          address: "1702 W University Ave Suite A1, Gainesville, FL 32603, USA",
        },
      ],
    };
  },
  mounted() {
    // Load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI`;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 29.65322, lng: -82.3449 }, // set the initial center of the map
        zoom: 14, // set the initial zoom level of the map
      });
      // add markers to the map
      var infowindow = new google.maps.InfoWindow();
      this.places.forEach((place) => {
        let marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map: map,
          title: place.name,
        });
        google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(`<div>
                                    <h3>${place.name}</h3>
                                    <p>${place.address}</p>
                                  </div>`);
          infowindow.open(map, marker);
        });
      });
    },
  },
};
</script>

<style scoped>
.map-container {
  height: 1000px;
}

.map {
  height: 100%;
}
</style>
