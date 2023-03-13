<template>
  <q-page class="q-pa-lg">
    <q-input placeholder="Whats Popyn?" class="q-ma-md" outlined rounded dense>
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </q-page>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>
