<template>
  <div>
    <q-page class="q-pa-lg">
      <q-input
        placeholder="Whats Popyn?"
        class="q-ma-md"
        v-model="coordinates"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <div class="q-pa-md q-gutter-sm">
        <q-btn icon="location_on" @click="findExactLoc" />
        <q-btn
          class="my-button"
          color="secondary"
          text-color="white"
          label="Bars"
          @click="findBarsNearby"
        />
        <q-btn
          class="my-button"
          color="purple"
          text-color="white"
          label="Clubs"
          @click="findClubsNearby"
        />
      </div>

      <q-list>
        <q-item v-for="place in places" :key="place.id">
          <q-item-section>
            <img :src="place.imageSrc" alt="Place image" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <div>{{ place.name }}</div>
              <div>{{ place.address }}</div>
              <div>
                <q-rating
                  v-model="place.rating"
                  :max="5"
                  :icon="'star'"
                  :size="'sm'"
                  :readonly="true"
                  :color="'black'"
                />
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
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
    latLoc: "29.6532",
    lngLoc: "-82.3449",
    places: [],
    top_places: [
      "ChIJoQC7ieGj6IgRhZVl0mVRx5c",
      "ChIJfzM7wIyj6IgRBdNiPqiE4g0",
      "ChIJwW45IY2j6IgR0obimGuW0Xo",
      "ChIJwW45IY2j6IgR0obimGuW0Xo",
      "ChIJ0bK0RUKj6IgRoMEfv3FqFR8",
      "ChIJpRSBsY2j6IgRugXoTUGeRIc",
      "ChIJXzqBxxSj6IgRU2IaUzNKHgc",
      "ChIJkf0q7oyj6IgR7sFmwD_TSq8",
      "ChIJ7cPd8oSj6IgRBdNVcm4dI7w",
      "ChIJPam18Yyj6IgR_IB_s_lRHsc",
      "ChIJF69YHY2j6IgR1eJB1R4qJXE",
      "ChIJeWQGOY2j6IgRolwm3higq5w",
      "ChIJcZacuIyj6IgRX_XTQhT5UoI",
      "ChIJaXGagXij6IgRDp0ti8KfLBE",
      "ChIJCURNZYKj6IgRX0Ismyjwfas",
      "ChIJPS0RhHij6IgRYdUd0BbiSzo",
      "ChIJj2W1eIKj6IgReGadK5Wxt58",
      "ChIJ1TQsf4Kj6IgRrNWM6dG-KhI",
      "ChIJc-28d4Kj6IgRO5rIx4Nw4Ss",
    ],
  }),
  computed: {
    coordinates() {
      return `${this.latLoc},${this.lngLoc}`;
    },
  },
  methods: {
    AccessLocation() {
      this.latLoc = "29.6532";
      this.lngLoc = "-82.3449";

      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       this.latLoc = position.coords.latitude;
      //       this.lngLoc = position.coords.longitude;
      //       console.log("latitude: " + this.latLoc);
      //       console.log("longitude: " + this.lngLoc);
      //     },
      //     (error) => {
      //       console.log(error.message);
      //     }
      //   );
      // } else {
      //   console.log("Not supported");
      // }
    },
    async findExactLoc() {
      this.AccessLocation();
      const latlng = `${this.latLoc},${this.lngLoc}`;

      let { data } = await axios.post(
        "https://us-central1-popyn-18d51.cloudfunctions.net/findExactLocation",
        {
          latlng: latlng,
        }
      );

      if (data === "No Results") {
        return cors(request, response, () => {
          response.status(500).send();
        });
      }

      let obj = {
        id: data.id,
        name: data.name,
        address: data.address,
        image: data.icon,
        rating: data.rating,
      };
      this.places.push(obj);

      console.log(data);
    },
    async findBarsNearby() {
      this.places = [];
      let latlngLocation = this.latLoc + "," + this.lngLoc;
      let { data } = await axios.post(
        "https://us-central1-popyn-18d51.cloudfunctions.net/findNearbyBars",
        {
          latlng: latlngLocation,
        }
      );

      if (data === "No Results") {
        return cors(request, response, () => {
          console.log(error);
          response.status(500).send();
        });
      }
      for (var i = 0; i < data.length; i++) {
        let obj = {
          id: data[i].id,
          name: data[i].name,
          address: data[i].address,
          image: data[i].icon,
          rating: data[i].rating,
        };
        this.places.push(obj);
      }

      // for (let i = 0; i < this.places.length; i++) {
      //   console.log(this.places[i]);
      // }
      console.log("Bars");
      console.log(data);
    },
    async findClubsNearby() {
      let latlng = this.latLoc + "," + this.lngLoc;
      let { data } = await axios.post(
        "https://us-central1-popyn-18d51.cloudfunctions.net/findNearbyClubs",
        {
          latlng: latlng,
        }
      );

      if (data === "No Results") {
        return cors(request, response, () => {
          console.log(error);
          response.status(500).send();
        });
      }

      for (var i = 0; i < data.length; i++) {
        let obj = {
          id: data[i].id,
          name: data[i].name,
          address: data[i].address,
          image: data[i].icon,
          rating: data[i].rating,
        };
        this.places.push(obj);
      }
      console.log("Clubs");
      console.log(data);
    },
  },
});
</script>
