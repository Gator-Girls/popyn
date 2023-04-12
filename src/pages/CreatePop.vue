<template>
  <q-page>
    <div class="column items-center q-pa-sm">
      <q-list bordered separator style="width: 400px">
        <q-item class="bg-accent">
          <q-item-section>
            <div class="row">
              <div class="col-8 q-mt-xs">
                <q-btn
                  size="10px"
                  round
                  color="primary text-black"
                  class="q-mt-sm q-ml-sm"
                  to="/BackyardReviews"
                  icon="close"
                >
                </q-btn>
              </div>
              <div class="col-4 q-mt-xs q-pl-lg">
                <q-btn
                  rounded
                  size="12px"
                  class="q-mt-sm"
                  color="primary"
                  text-color="black"
                  label="Pop It"
                  to="/BackyardReviews"
                ></q-btn>
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-separator color="black" size="1.3px" />

        <q-item class="bg-secondary">
          <q-item-section>
            <div class="q-pa-md" style="max-width: 500px; height: 470px">
              <q-input
                borderless
                v-model="pop"
                placeholder="What's popyn right now!"
                autogrow
              />
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
  name: "PageCreatePop",
  data() {
    return {
      pop: "",
    };
  },
});
</script>
