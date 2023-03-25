<template>
  <div>
    <q-page class="q-pa-lg">
      <q-input
        placeholder="Whats Popyn?"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn icon="location_on" @click="findLocation" />
    </q-page>

    <section id="map"></section>
  </div>
</template>

<script>
// import MapSetup from "./MapSetup.vue";
import { defineComponent } from "vue";
import axios from "axios";

const cors = require("cors")({
  origin: true,
});

export default defineComponent({
  mounted() {
    this.showLocationOnMap(position.coords.latitude, position.coords.longitude);
  },
  data() {
    return {
      latLoc: "",
      lngLoc: "",
      error: "",
    };
  },
  // components: {
  //   MapSetup,
  // },
  methods: {
    findLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Not supported");
      }
    },
    showLocationOnMap(latitude, longitude) {
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
      });
    },
    async getAddressFrom(lat, lng) {
      await axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
        )
        .then((response) => {
          if (response.data.error_messaage) {
            return cors(request, response, () => {
              response.status(200).send("No Results");
            });
          } else {
            this.latLoc = response.data.results[0].geometry.location.lat;
            this.lngLoc = response.data.results[0].geometry.location.lng;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});
</script>
