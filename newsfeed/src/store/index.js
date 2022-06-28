import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    news: [
      {
        id: "n1",
        title: "Challanger SRT demon coming in India?",
        author: "Mohit Shah",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n2",
        title: "BMW M3 the Gentleman's choice!!!!!!",
        author: "Nidhi Singh",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n3",
        title: "Chevrolet Camaro Sport car's dream.",
        author: "Dhrumit Shah",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
      {
        id: "n4",
        title: "Supra the boss of the world!",
        author: "Vivek Shah",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },

      {
        id: "n5",
        title: "BMW M3 worth the money?",
        author: "Disha Trivedi",
        description:
          "These immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
      },
    ],
  },
  mutations: {
    logout(state) {
      state.authenticated = false;
    },
    deleteNews(state, id) {
      var news1 = state.news.filter((news) => news.id !== id);
      state.news.splice(news1, 1);
    },
    login(state) {
      state.authenticated = true;
    },
  },
  getters: {
    newsDetails(state) {
      return state.news;
    },
    isLogin(state) {
      return state.authenticated;
    },
  },
});
