<template>
  <q-btn
    round
    color="primary text-black"
    class="q-mt-md q-ml-sm"
    to="/Profile"
    icon="arrow_back"
  >
  </q-btn>
  <q-page>
    <div bordered separator class="column items-center">
      <q-list bordered separator style="width: 400px">
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
              <div class="row"></div>
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
  name: "PageMyComments",
  data() {
    return {
      comments: [
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
