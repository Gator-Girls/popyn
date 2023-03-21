<template>
  <q-page>
    <div>
      <q-tabs>
        <q-route-tab to="/Home" label="Trending" />
        <q-route-tab to="/Nearby" label="Nearby" />
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNearby",
});
</script>
