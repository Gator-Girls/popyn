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
          <q-item-section>Backyard box</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>Review 1</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>OVERLINE</q-item-label>
            <q-item-label>Review</q-item-label>
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
