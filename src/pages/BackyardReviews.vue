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
      <q-list bordered separator style="width: 400px">
        <q-item class="bg-secondary">
          <q-item-section>
            <div class="row">
              <div class="col-8 q-mt-xs">
                <div class="text-weight-bold">The Backyard at Boca Fiesta</div>
                <div class="q-pl-sm">
                  <div>2.7 mi • Bar • $$</div>
                  <div>Open 4:00pm - 2:00am</div>
                  <div>★★★★☆ (38)</div>
                </div>
              </div>
              <div class="col-4 self-center q-mt-xs q-pl-lg">
                <img
                  alt="Popyn logo"
                  src="~assets/backyard.ico"
                  style="width: 88px; height: 88px"
                />
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-separator color="black" size="1.3px" />

        <q-item class="bg-secondary">
          <q-item-section>
            <q-item-label caption top>2m ago</q-item-label>
            <q-item-label>the music is AMAZING tonite xP</q-item-label>
            <q-item-label>
              <div class="row">
                <q-btn
                  flat
                  round
                  size="sm"
                  icon="chat_bubble_outline"
                  style="margin-left: -6px"
                >
                </q-btn>
                <q-item-label class="q-mt-sm" caption>(0)</q-item-label>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="bg-secondary">
          <q-item-section>
            <q-item-label caption top>24m ago</q-item-label>
            <q-item-label
              >wow this place is packed!! and drinks are so expensive
              bruh</q-item-label
            >
            <q-item-label>
              <div class="row">
                <q-btn
                  flat
                  round
                  size="sm"
                  icon="chat_bubble_outline"
                  style="margin-left: -6px"
                >
                </q-btn>
                <q-item-label class="q-mt-sm" caption>(2)</q-item-label>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="bg-secondary">
          <q-item-section>
            <q-item-label caption top>34m ago</q-item-label>
            <q-item-label
              >did anyone preband????? im tryna go OUT tonight!!
              WOOOO</q-item-label
            >
            <q-item-label>
              <div class="row">
                <q-btn
                  flat
                  round
                  size="sm"
                  icon="chat_bubble_outline"
                  style="margin-left: -6px"
                >
                </q-btn>
                <q-item-label class="q-mt-sm" caption>(1)</q-item-label>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-btn
      round
      class="absolute-bottom-right q-mb-sm q-mr-sm"
      color="primary"
      icon="add"
      to="/CreatePop"
    ></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBackyardReviews",
});
</script>
