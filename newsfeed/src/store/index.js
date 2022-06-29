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
          "Immensely powerful cars use the 6.2-liter Hemi V8 engine that produces 717 hp in the Hellcat and 808 hp in the SRT Demon, so the Demon is much faster than the Hellcat.",
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
  actions: {
    // addItem(state, news) {
    //   console.log(news);
    //   state.news.push(news);
    //   // commit("addNews", news);
    //   // this.$router.push({ path: "/" });
    // },
  },
  mutations: {
    addItem(state, news) {
      console.log(news);
      state.news.push(news);
      // commit("addNews", news);
    },
    logout(state) {
      state.authenticated = false;
    },
    deleteNews(state, id) {
      console.log(id);
      state.news.splice(id, 1);
    },
    login(state) {
      state.authenticated = true;
    },
    setId(state, id) {
      if (state.id === id) {
        console.log(id);
      }
    },
  },
  getters: {
    newsDetails(state) {
      return state.news;
    },
    isLogin(state) {
      return state.authenticated;
    },
    newData(state) {
      return state.newData;
    },
  },
});
