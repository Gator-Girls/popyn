<template>
  <q-page class="q-pa-lg">
    <h5 class="row justify-center">Logyn</h5>
    <div class="row justify-center">
      <div class="col q-gutter-md" style="max-width: 400px">
        <q-input rounded outlined v-model="text" label="Username" />
        <q-input rounded outlined v-model="text" label="Password" />
      </div>
    </div>

    <div class="row justify-center">
      <q-btn
        rounded
        class="q-mt-md"
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
