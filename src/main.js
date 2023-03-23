import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI",
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
