<template>
  <q-page class="q-pa-lg">
    <div class="text-body1">
      <q-input
        placeholder="Whats Popyn?"
        class="q-ma-md"
        v-model="search"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <!-- <h5 class="q-mt-none q-mb-md text-weight-bold">Results</h5> -->
  </q-page>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      search: "",
    };
  },
};
</script>
