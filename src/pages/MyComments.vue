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
          My Comments
        </div>
      </div>
    </div>
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
