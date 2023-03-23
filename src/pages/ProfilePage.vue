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
  data() {
    return {
      address: "",
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
            this.showLocationOnMap(
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
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI",
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.data.error_messaage) {
            console.log(response.data.error_message);
          } else {
            this.address = response.data.results[0].formatted_address;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});
</script>
