<template>
  <div>
    <div v-for="booking in bookings" :key="booking.id">
      <div class="d-flex" v-if="booking.end === headerDate || booking.start === headerDate">
        <div class="left-part">
          <div v-if="booking.end === headerDate" class="cell end-button rounded-r-xl" @click="getInfo(booking)"></div>
        </div>
        <div class="right-part">
          <div v-if="booking.start === headerDate" class="cell start-button rounded-l-xl" @click="getInfo(booking)"></div>
        </div>
      </div>
      <div v-else class="full-width-element" @click="getInfo(booking)">
        <div  class="full-button cell"></div>
      </div>
    </div>
    <BookingInfo :dialog="showBookingInfo" :info="bookingInfo"  @close="hideBookingInfo"/>
  </div>
</template>

<script>
import BookingInfo from "@/components/BookingInfo.vue"
export default {
  components: {BookingInfo},
  data() {
    return {
      showBookingInfo: false,
      bookingInfo: null
    }
  },
  name: "AppCell",
  props: {
    bookings: {
      type: Array,
    },
   headerDate: {
     type: String,
   }
  },
  methods: {
    getInfo(booking) {
      this.showBookingInfo = true
      this.bookingInfo = booking
    },
    hideBookingInfo() {
      this.showBookingInfo = false
    }
  }
}
</script>

<style scoped>

.cell {
  flex: 1;
  padding: 10px;
}

.start-button {
  background-color: deepskyblue;
}

.end-button {
  background-color: deepskyblue;
}

.full-button {
  background-color: deepskyblue;
}

.left-part {
  flex: 1;
}

.right-part {
  flex: 1;
}
.full-width-element {
  width: 100%;
}
</style>




