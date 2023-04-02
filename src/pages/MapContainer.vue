<template>
  <div class="map-container">
    <div id="map" ref="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "MapContainer",
  mounted() {
    // Load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI`;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // set the initial center of the map
        zoom: 12, // set the initial zoom level of the map
      });
      // add markers to the map
      const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: "San Francisco",
      });
    },
  },
};
</script>

<style scoped>
.map-container {
  height: 500px;
}

.map {
  height: 100%;
}
</style>
