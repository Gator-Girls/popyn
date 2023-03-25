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
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          v-model="coordinates"
          icon="location_on"
          @click="locationButtonPressed"
        />
        <q-btn
          class="my-button"
          color="secondary"
          text-color="white"
          label="Nearby"
          @click="findLocationsNearby"
        />
      </div>
    </q-page>

    <section id="map"></section>
  </div>
</template>

<style>
.my-button {
  padding: 10px 20px;
}
</style>

<script>
import { defineComponent } from "vue";
import axios from "axios";

const cors = require("cors")({
  origin: true,
});

export default defineComponent({
  name: "SearchPage",
  mounted() {
    this.showLocationOnMap(latLoc, lngLoc);
  },
  data() {
    return {
      latLoc: "29.628825",
      lngLoc: "-82.37875",
      error: "",
      places: [],
    };
  },
  computed: {
    coordinates() {
      return `${this.latLoc},${this.lngLoc}`;
    },
  },
  methods: {
    locationButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latLoc = position.coords.latitude;
            this.lngLoc = position.coords.longitude;
            console.log(this.latLoc);
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
    async findLocationsNearby() {
      await axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            this.latLoc +
            "," +
            this.lngLoc +
            "&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
        )
        .then((response) => {
          if (response.data.error_messaage) {
            return cors(request, response, () => {
              response.status(200).send("No Results");
            });
          } else {
            console.log(response.data.results[0]);
            // this.latLoc = response.data.results[0].LatLng.lat;
            // this.lngLoc = response.data.results[0].LatLng.lng;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    // async findLocationsNearby() {
    //   await axios
    //     .get(
    //       // `https://maps.googleapis.com/maps/api/place/nearbysearch/output?location=${this.latLoc},${this.lngLoc}&radius=50000&type=bar&type=night_club&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI`
    //       "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    //         latLoc +
    //         "," +
    //         lngLoc +
    //         "&radius=50000&type=bar&type=night_club&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
    //     )
    //     .then((response) => {
    //       if (response.data.error_messaage) {
    //         return cors(request, response, () => {
    //           response.status(200).send("No Results");
    //         });
    //       } else {
    //         console.log(response.data.results);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // },
  },
});
</script>
