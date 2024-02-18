import Vue from 'vue'
import Vuex from 'vuex'
import dates from "@/modules/dates"
import rooms from "@/modules/rooms"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dates,
    rooms
  }
})

export default store

