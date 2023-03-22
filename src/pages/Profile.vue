<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
  <div>
    <h1>{{ "not working" }}</h1>
  </div>
</template>

<script>
import SearchPage from "./SearchPage.vue";

export default {
  name: "PageAbout",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
