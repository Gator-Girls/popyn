<template>
  <q-page>
    <q-btn
      round
      color="primary text-black"
      class="q-mt-md q-ml-sm"
      to="/Home"
      icon="arrow_back"
    >
    </q-btn>
    <div class="column items-center">
      <q-list bordered separator>
        <q-item>
          <q-item-section>
            <div class="row">
              <div class="col-8 text-left">
                <div class="text-weight-bold">
                  2. The Backyard at Boca Fiesta
                </div>
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
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>Review 1</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>Review 2</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBackyardReviews",
});
</script>
