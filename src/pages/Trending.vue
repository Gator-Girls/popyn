<template>
  <q-page>
    <div>
      <q-tabs>
        <q-route-tab to="/Home" label="Trending" />
        <q-route-tab to="/Nearby" label="Nearby" />
      </q-tabs>
    </div>

    <!-- <img
      alt="Popyn logo"
      src="~assets/Popyn_-logos_transparent.ico"
      style="width: 300px; height: 300px"
    /> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTrending",
});
</script>
