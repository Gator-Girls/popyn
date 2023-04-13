<template>
  <q-page>
    <div class="row">
      <div class="col-1 q-mt-xs">
        <q-btn
          round
          color="primary text-black"
          class="q-mt-md q-ml-sm"
          to="/Profile"
          icon="arrow_back"
        >
        </q-btn>
      </div>
      <div class="col-11 q-mt-lg q-pl-lg">
        <div style="height: 25px; font-size: 20px; font-weight: 500">
          My Pops
        </div>
      </div>
    </div>
    <div class="column items-center">
      <q-list bordered separator style="width: 400px">
        <q-item
          v-for="review in reviews"
          :key="review.id"
          class="review q-py-md bg-secondary"
        >
          <q-item-section style="width: 330px">
            <div class="row">
              <div class="col-11 q-mt-xs">
                <q-item-label caption top>{{ review.time }}</q-item-label>
                <q-item-label>{{ review.content }}</q-item-label>
                <q-item-label>
                  <div class="row">
                    <q-btn
                      flat
                      round
                      size="sm"
                      icon="chat_bubble_outline"
                      style="margin-left: -6px"
                      to="/MyBackyardComments"
                    >
                    </q-btn>
                    <q-item-label class="q-mt-sm" caption>{{
                      review.numComments
                    }}</q-item-label>
                  </div>
                </q-item-label>
              </div>
              <div class="col-1">
                <q-btn
                  flat
                  round
                  size="sm"
                  icon="keyboard_arrow_up"
                  style="margin-left: -6px"
                  disable
                >
                </q-btn>
                <q-item-label class="q-ml-xs">2</q-item-label>
                <q-btn
                  flat
                  round
                  size="sm"
                  icon="keyboard_arrow_down"
                  style="margin-left: -6px"
                  disable
                >
                </q-btn>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageMyPops",
  data() {
    return {
      reviews: [
        {
          time: "34m ago",
          content: "did anyone preband????? im tryna go OUT tonight!! WOOOO",
          numComments: "(3)",
          value: 4,
        },
      ],
    };
  },
});
</script>
