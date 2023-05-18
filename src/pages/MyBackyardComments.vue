<template>
  <q-btn
    round
    color="primary text-black"
    class="q-mt-md q-ml-sm"
    to="/MyPops"
    icon="arrow_back"
  >
  </q-btn>
  <div class="column items-center">
    <q-list bordered separator style="width: 400px">
      <q-item class="bg-secondary">
        <q-item-section>
          <div class="row">
            <div class="col-11 q-mt-xs">
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
                    disable
                  >
                  </q-btn>
                  <q-item-label class="q-mt-sm" caption>(3)</q-item-label>
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
      <q-separator color="black" size="1.3px" />
      <q-item
        v-for="comment in comments"
        :key="comment.id"
        class="bg-secondary"
        style="width: 400px"
      >
        <q-item-section>
          <q-item-label caption top>{{ comment.time }}</q-item-label>
          <q-item-label>{{ comment.content }}</q-item-label>
          <q-item-label>
            <div></div>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageBackyardComments",
  props: {
    reviewId: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      comments: [
        {
          time: "20m ago",
          content: "The lines too longgg",
        },
        {
          time: "15m ago",
          content: "Don't Go",
        },
        {
          time: "13m ago",
          content: "The music is trash",
        },
      ],
    };
  },
});
</script>
