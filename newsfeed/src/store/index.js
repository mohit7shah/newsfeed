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
          "BMW claims the xDrive system fitted for the first time ever to a 3 Series-shaped M car takes 0.4secs off the 0-62mph time. It's a bit of a dry stat, even if the resulting 3.5secs is impressively fast. Fastest car in its class, but then there aren't many similarly potent rivals about these days.",
      },
      {
        id: "n3",
        title: "Chevrolet Camaro Sport car's dream.",
        author: "Dhrumit Shah",
        description:
          "Yes, the Chevrolet Camaro is a good car. Like any good sports car, it has athletic handling, though it doesn't come at the expense of ride quality. And like a proper muscle car, the Camaro offers a range of aggressive powertrains, including two high-performance V8 engines.",
      },
      {
        id: "n4",
        title: "Supra the boss of the world!",
        author: "Vivek Shah",
        description:
          "Toyota supra car price in India: Supra is not available officially in India. But in the US and UK, its price starts from $56,390 and goes up to $67,690 and according to this and all other Texas the price of Supra in India can start from Rs. 70 lakh to Rs. 1 crore.",
      },

      {
        id: "n5",
        title: "BMW 320d worth the money?",
        author: "Disha Trivedi",
        description:
          "Go, 320d Sport is powered by a 1995 cc Diesel engine mated to a 8 Gears, Manual Override & Paddle Shift, Sport Mode speed Automatic (Torque Converter) gearbox which generates 188 bhp of power & 400 Nm of torque.",
      },
    ],
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
      console.log(id);
      // if (state.id === id) {
      // }
    },
  },
  getters: {
    newsDetails(state) {
      return state.news;
    },
    isLogin(state) {
      return state.authenticated;
    },
    // newData(state) {
    //   return state.news;
    // },
  },
});
