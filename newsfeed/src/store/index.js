import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      {
        id: "n1",
        title: "Challanger SRT demon",
        author: "Mohit Shah",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n2",
        title: "BMW M3",
        author: "Nidhi",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n3",
        title: "Chevrolet Camaro",
        author: "Dhrumit",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n4",
        title: "Supra",
        author: "Vivek",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },

      {
        id: "n2",
        title: "BMW M3",
        author: "Disha",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
    ],
  },
  mutations: {
    logout(state) {
      state.authenticated = false;
      this.$router.replace("/login");
    },
  },
  getters: {
    newsDetails(state) {
      return state.news;
    },
  },
});
