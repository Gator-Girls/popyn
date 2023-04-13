<template>
  <q-btn
    round
    color="primary text-black"
    class="q-mt-md q-ml-sm"
    to="/BackyardReviews"
    icon="arrow_back"
  >
  </q-btn>
  <div bordered separator class="column items-center">
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
          <div class="row">
            <q-btn
              flat
              round
              size="sm"
              icon="chat_bubble_outline"
              style="margin-left: -6px"
            >
            </q-btn>
          </div>
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageBackyardComments",
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
