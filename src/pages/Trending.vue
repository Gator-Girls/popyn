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
    <q-btn
      round
      class="absolute-bottom-right q-mb-sm q-mr-sm"
      color="primary"
      icon="add"
      to="/CreatePop"
    ></q-btn>

    <div class="row justify-center">
      <q-btn color="primary" class="q-mt-md" no-caps style="width: 400px">
        <div class="column text-black text-left" style="height: 80px">
          <div class="col text-weight-bold">
            1. The Backyard at Boca Fiesta & Palominos
          </div>
          <div class="col on-right q-pl-sm q-pt-sm">2.7 mi • Bar • $$</div>
          <div class="col on-right q-pl-sm q-pt-sm">Open 4:00pm - 2:00am</div>
          <div class="col on-right q-pl-sm q-pt-sm">★★★★☆ (38)</div>
        </div>
        <img
          alt="Popyn logo"
          src="~assets/Popyn_-logos_transparent.ico"
          style="width: 88px; height: 88px"
        />
      </q-btn>
    </div>

    <div class="row justify-center">
      <q-btn color="primary" class="q-mt-md" no-caps style="width: 400px">
        <div class="column text-black text-left" style="height: 80px">
          <div class="col text-weight-bold">2. Downtown Fats</div>
          <div class="col on-right q-pl-sm q-pt-sm">2.4 mi • Bar • $</div>
          <div class="col on-right q-pl-sm q-pt-sm">Open 4:00pm - 2:00am</div>
          <div class="col on-right q-pl-sm q-pt-sm">★★★★☆ (29)</div>
        </div>
        <img
          alt="Popyn logo"
          src="~assets/Popyn_-logos_transparent.ico"
          style="width: 88px; height: 88px"
        />
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTrending",
});
</script>
