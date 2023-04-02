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
          color="primary"
          text-color="white"
          label="Exact"
          @click="findExactLoc"
        />
        <q-btn
          class="my-button"
          color="secondary"
          text-color="white"
          label="Nearby"
          @click="findExactLoc"
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
  // mounted() {
  //   this.showLocationOnMap(latLoc, lngLoc);
  // },
  data: () => ({
    latLoc: "",
    lngLoc: "",
    error: "",
    current_placeId: "",
    address: "",
    places: [],
  }),
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
            console.log("latitude" + this.latLoc);
            console.log("longitude" + this.lngLoc);
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Not supported");
      }
    },
    async findExactLoc() {
      const latlng = `${this.latLoc},${this.lngLoc}`;

      let { data } = await axios.post(
        "https://us-central1-popyn-18d51.cloudfunctions.net/findExactLocation",
        {
          latlng: latlng,
        }
      );

      if (data === "No Results") {
        // return cors(request, response, () => {
        //   response.status(500).send();
        // });
        console.log(data);
        console.log("here");
        return;
      }

      console.log(data);
    },
    // async findLocNearby() {
    //   let latlng = this.latLoc + "," + this.lngLoc;
    //   let { data } = await axios.get(
    //     "https://us-central1-popyn-18d51.cloudfunctions.net/findExactLocation",
    //     {
    //       latlng: latlng,
    //     }
    //   );

    //   if (data === "No Results") {
    //     return cors(request, response, () => {
    //       console.log(error);
    //       response.status(500).send();
    //     });
    //   }

    //   console.log(data);
    // },
  },
});
</script>
