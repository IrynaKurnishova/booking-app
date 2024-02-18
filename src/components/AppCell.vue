<template>
  <div class="flex justify-between">
    <div v-if="matchingDate !== 'full'">
      <div v-if="matchingDate === 'start'" class="cell start-button rounded-l-xl">{{matchingDate}}</div>
      <div v-else class="cell end-button rounded-r-xl">{{matchingDate}}</div>
    </div>
    <div v-else class="cell full-button">{{matchingDate}}</div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "AppCell",
  data() {
    return {
      bookings: []
    }
  },
  props: {
    bookedRooms: Array,
    headerDate: String
  },
  computed: {
    filteredBookings() {
      return this.filterBookingsByDate(this.bookedRooms, this.headerDate);
    },
    matchingDate() {
      if (!this.filteredBookings || this.bookedRooms.length === 0) return null;

      const startDate = moment(this.filteredBookings[0].start);
      const endDate = moment(this.filteredBookings[0].end);
      const targetDate = moment(this.headerDate);

      if (targetDate.isSame(startDate, 'day')) {
        return "start"
      } else if (targetDate.isSame(endDate, 'day')) {
        return "end"
      } else if (targetDate.isBetween(startDate, endDate, 'day')) {
        return "full"
      } else {
        return "Does not match any date";
      }
    }
  },
  methods: {
    filterBookingsByDate(bookings, targetDate) {
      return bookings.filter(booking => {
        const startDate = moment(booking.start);
        const endDate = moment(booking.end);
        return moment(targetDate).isSameOrAfter(startDate) && moment(targetDate).isSameOrBefore(endDate)
      });
    }
  }
}
</script>

<style scoped>

.cell {
  flex: 1; /* Занимать всю доступную ширину */
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
</style>




