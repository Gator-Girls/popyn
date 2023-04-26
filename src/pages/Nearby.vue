<template>
  <q-page>
    <div>
      <q-tabs>
        <q-route-tab to="/home" label="Trending" />
        <q-route-tab to="/nearby" label="Nearby" />
      </q-tabs>
    </div>

    <!-- <img
      alt="Popyn logo"
      src="~assets/Popyn_-logos_transparent.ico"
      style="width: 300px; height: 300px"
    /> -->

    <div class="column items-center">
      <q-item v-for="barP in bars" :key="barP.id" class="barP q-py-xs">
        <div class="row">
          <q-btn
            color="secondary text-black"
            class="q-mt-md"
            no-caps
            style="width: 400px; height: 120px"
            :to="barP.pathTo"
          >
            <div class="col-8 text-left">
              <div class="text-weight-bold">
                {{ barP.ranking }}{{ barP.locName }}
              </div>
              <div class="q-pl-sm">
                <div>{{ barP.distanceLine }}</div>
                <div>{{ barP.hours }}</div>
                <div>{{ barP.stars }}</div>
              </div>
            </div>
            <div class="col-4 self-center q-mt-sm">
              <img
                alt="Popyn logo"
                :src="barP.img"
                style="width: 88px; height: 88px"
              />
            </div>
          </q-btn>
        </div>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTrending",
  data() {
    return {
      bars: [
        {
          locName: "Downtown Fats",
          ranking: "1. ",
          distanceLine: "2.4 mi • Bar • $",
          hours: "Open 4:00pm - 2:00am",
          stars: "★★★★☆ (29)",
          pathTo: "/dtfreviews",
          img: require("../assets/dtf.ico"),
        },
        {
          locName: "The Backyard at Boca Fiesta",
          ranking: "2. ",
          distanceLine: "2.7 mi • Bar • $$",
          hours: "Open 4:00pm - 2:00am",
          stars: "★★★★☆ (38)",
          pathTo: "/BackyardReviews",
          img: require("../assets/backyard.ico"),
        },
        {
          locName: "Arcade Bar",
          ranking: "3. ",
          distanceLine: "2.8 mi • Bar • $",
          hours: "Open 4:00pm - 3:00am",
          stars: "★★★☆☆ (14)",
          pathTo: "/barcadereviews",
          img: require("../assets/barcade.ico"),
        },
        {
          locName: "Fat Daddy's",
          ranking: "4. ",
          distanceLine: "3.1 mi • Bar • $",
          hours: "Open 4:00pm - 2:00am",
          stars: "★★★☆☆ (20)",
          pathTo: "/fatdaddyreviews",
          img: require("../assets/fatdaddy.ico"),
        },
      ],
    };
  },
});
</script>
