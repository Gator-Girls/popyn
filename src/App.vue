<template>
  <!-- <div id="app" class="container mt-6">
    <b-form @submit.prevent="handleGrabClub">
      <b-row>
        <b-form-group label="Address">
          <b-form-input v-model="address"> </b-form-input>
        </b-form-group>
      </b-row>
    </b-form>
    <b-button type="submit" variant="primary"></b-button>
  </div> -->
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  // data: () => ({
  //   savedLocation: [],
  //   formData: {
  //     full_address: "",
  //   },
  // }),
  // methods: {
  //   async handleGrabClub() {},
  // },
});
</script>
