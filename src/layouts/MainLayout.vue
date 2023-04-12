<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-primary text-black">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->
        <img
          alt="Popyn logo"
          src="~assets/Popyn_-logos_transparent.ico"
          style="width: 88px; height: 88px"
        />
        <q-toolbar-title class="text-weight-bold">
          <!-- {{ $route.name }} IF WE WANT CURRENT PAGE NAME IN HEADER-->
          <span>{{ "What's Popyn!" }}</span>
          <!-- <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"
          /> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer bordered class="bg-primary text-black">
      <q-tabs>
        <q-route-tab to="/home" label="Home" icon="home" />
        <q-route-tab to="/search" label="Search" icon="search" />
        <q-route-tab to="/profile" label="Profile" icon="person" />
      </q-tabs>
    </q-footer>
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
