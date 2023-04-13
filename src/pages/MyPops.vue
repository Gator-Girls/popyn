<template>
  <q-page>
    <q-btn
      round
      color="primary text-black"
      class="q-mt-md q-ml-sm"
      to="/Profile"
      icon="arrow_back"
    >
    </q-btn>
    <div class="column items-center">
      <q-list bordered separator style="width: 400px">
        <q-item
          v-for="review in reviews"
          :key="review.id"
          class="review q-py-md bg-secondary"
        >
          <q-item-section style="width: 330px">
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
                  to="/BackyardComments"
                >
                </q-btn>
                <q-item-label class="q-mt-sm" caption>{{
                  review.numComments
                }}</q-item-label>
              </div>
            </q-item-label>
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
          numComments: "(0)",
        },
      ],
    };
  },
});
</script>
