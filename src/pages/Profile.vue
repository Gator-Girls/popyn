<template>
  <q-page class="q-pa-lg">
    <div class="q-pa-md q-gutter-y-md bg-primary">
      <q-avatar size="100px" color="bg-primary">AB</q-avatar>
      <span STYLE="font-size:200%"> Anita Bath</span>
    </div>
    <div class="text-body1">
      <q-list>
        <q-item clickable v-ripple to="/MyPops">
          <q-item-section> My Pops </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/MyComments">
          <q-item-section> My Comments </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="row justify-center">
      <q-btn
        rounded
        class="q-mt-md"
        color="primary"
        text-color="black"
        label="Log out"
        to="/Login"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageProfile",
};
</script>
