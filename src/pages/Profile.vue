<template>
  <q-page class="q-pa-lg">
    <div class="q-pa-md q-gutter-y-md bg-primary">
      <q-avatar size="100px" color="bg-primary">AB</q-avatar>
      <span STYLE="font-size:200%"> Anita Bath</span>
    </div>
    <div class="text-body1">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section> My Pops </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> My Comments </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-btn
      rounded
      class="absolute-center"
      color="primary"
      text-color="black"
      label="Log out"
    ></q-btn>
  </q-page>
</template>

<script>
export default {
  name: "PageProfile",
};
</script>
