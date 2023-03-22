<template>
  <q-page>
    <div>
      <q-tabs>
        <q-route-tab to="/home" label="Trending" />
        <q-route-tab to="/nearby" label="Nearby" />
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
