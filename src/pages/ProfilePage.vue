<template>
  <div>
    <q-page class="q-pa-lg"> </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfilePage",
  data() {
    return {
      address: "",
      error: "",
    };
  },
});
</script>
