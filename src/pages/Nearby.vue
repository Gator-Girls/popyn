<template>
  <q-page>
    <div>
      <q-tabs>
        <q-route-tab to="/home" label="Trending" />
        <q-route-tab to="/nearby" label="Nearby" />
      </q-tabs>
    </div>

    <div class="column items-center">
      <div class="row">
        <q-btn
          color="primary text-black"
          class="q-mt-md"
          no-caps
          style="width: 400px; height: 120px"
        >
          <div class="col-8 text-left">
            <div class="text-weight-bold">1. Downtown Fats</div>
            <div class="q-pl-sm">
              <div>2.4 mi • Bar • $</div>
              <div>Open 4:00pm - 2:00am</div>
              <div>★★★★☆ (29)</div>
            </div>
          </div>
          <div class="col-4">
            <img
              alt="Popyn logo"
              src="~assets/Popyn_-logos_transparent.ico"
              style="width: 88px; height: 88px"
            />
          </div>
        </q-btn>
      </div>
      <div class="row">
        <q-btn
          color="primary text-black"
          class="q-mt-md"
          no-caps
          style="width: 400px; height: 120px"
        >
          <div class="col-8 text-left">
            <div class="text-weight-bold">2. The Backyard at Boca Fiesta</div>
            <div class="q-pl-sm">
              <div>2.7 mi • Bar • $$</div>
              <div>Open 4:00pm - 2:00am</div>
              <div>★★★★☆ (38)</div>
            </div>
          </div>
          <div class="col-4">
            <img
              alt="Popyn logo"
              src="~assets/Popyn_-logos_transparent.ico"
              style="width: 88px; height: 88px"
            />
          </div>
        </q-btn>
      </div>
      <div class="row">
        <q-btn
          color="primary text-black"
          class="q-mt-md"
          no-caps
          style="width: 400px; height: 120px"
        >
          <div class="col-8 text-left">
            <div class="text-weight-bold">3. Arcade Bar</div>
            <div class="q-pl-sm">
              <div>2.8 mi • Bar • $</div>
              <div>Open 4:00pm - 3:00am</div>
              <div>★★★☆☆ (14)</div>
            </div>
          </div>
          <div class="col-4">
            <img
              alt="Popyn logo"
              src="~assets/Popyn_-logos_transparent.ico"
              style="width: 88px; height: 88px"
            />
          </div>
        </q-btn>
      </div>
      <div class="row">
        <q-btn
          color="primary text-black"
          class="q-mt-md"
          no-caps
          style="width: 400px; height: 120px"
        >
          <div class="col-8 text-left">
            <div class="text-weight-bold">4. Fat Daddy's</div>
            <div class="q-pl-sm">
              <div>3.1 mi • Bar • $</div>
              <div>Open 4:00pm - 2:00am</div>
              <div>★★★☆☆ (20)</div>
            </div>
          </div>
          <div class="col-4">
            <img
              alt="Popyn logo"
              src="~assets/Popyn_-logos_transparent.ico"
              style="width: 88px; height: 88px"
            />
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNearby",
});
</script>
