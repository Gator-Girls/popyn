<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" :width="283" bordered show-if-above>
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />

      <q-list>
        <q-item to="/" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/profile" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="account_circle" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold"
            >Profile</q-item-section
          >
        </q-item>

        <q-item to="/search" v-ripple clickable exact>
          <q-item-section avatar>
            <q-icon name="search" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold"
            >Search</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
    };
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
