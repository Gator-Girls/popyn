<template>
  <div v-if="visible" class="column items-center q-pa-sm">
    <q-list bordered separator style="width: 400px">
      <q-item class="bg-accent">
        <q-item-section>
          <div class="row">
            <div class="col-8 q-mt-xs">
              <q-btn
                @click="close"
                size="10px"
                round
                color="primary text-black"
                class="q-mt-sm q-ml-sm"
                to="/dtfreviews"
                icon="close"
              >
              </q-btn>
            </div>
            <div class="col-4 q-mt-xs q-pl-lg">
              <q-btn
                @click="save"
                rounded
                size="12px"
                class="q-mt-sm"
                color="primary"
                text-color="black"
                label="Pop It"
                to="/dtfreviews"
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
              v-model="inputValue"
              placeholder="What's popyn right now!"
              autogrow
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    save() {
      this.$emit("save", this.inputValue);
      this.inputValue = "";
    },
    close() {
      this.$emit("close");
      this.inputValue = "";
    },
  },
};
</script>

<style>
.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 300px;
}

.modal-container.is-active {
  display: block;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
