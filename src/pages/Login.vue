<template>
  <q-page class="q-pa-lg">
    <h5 class="row justify-center">Logyn</h5>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input rounded outlined v-model="text" label="Username" />
      <q-input rounded outlined v-model="text" label="Password" />
    </div>

    <div class="row justify-center">
      <q-btn
        rounded
        color="primary"
        text-color="black"
        label="Log in"
        to="/Profile"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageLogin",
};
</script>
