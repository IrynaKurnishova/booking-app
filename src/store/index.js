import Vue from 'vue'
import Vuex from 'vuex'
import dates from "@/modules/dates"
import bookings from "@/modules/bookings"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dates,
    bookings
  }
})

export default store

