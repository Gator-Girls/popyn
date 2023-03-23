<template>
  <q-page class="q-pa-lg">
    <GmapMap :center="center" :zoom="zoom">
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true"
        @click="openInfoWindow(marker)"
      />
      <GmapInfoWindow
        :position="infoWindowPosition"
        :opened="infoWindowOpened"
        @closeclick="closeInfoWindow"
      >
        <div>{{ infoWindowText }}</div>
      </GmapInfoWindow>
    </GmapMap>
  </q-page>
</template>

<script>
export default {
  name: "MapSetup",
  data() {
    return {
      center: { lat: 29.6526, lng: -82.3456 },
      zoom: 12,
      markers: [
        {
          position: { lat: 29.6499, lng: -82.3487 },
          text: "The Swamp",
        },
        {
          position: { lat: 29.6528, lng: -82.3453 }, //29.65284915720037, -82.34531644361613
          text: "Fats Daddys",
        },
        {
          position: { lat: 29.6525, lng: -82.3451 }, //29.65259503438586, -82.34515046093806
          text: "JJs Tavern",
        },
      ],
      infoWindowPosition: null,
      infoWindowOpened: false,
      infoWindowText: "",
    };
  },
  methods: {
    openInfoWindow(marker) {
      this.infoWindowPosition = marker.position;
      this.infoWindowOpened = true;
      this.infoWindowText = marker.text;
    },
    closeInfoWindow() {
      this.infoWindowOpened = false;
    },
  },
};
</script>
