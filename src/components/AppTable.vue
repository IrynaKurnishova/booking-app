<template>
  <v-card>
    <v-data-table :headers="headers" :items="Object.values(items)" dense outlined>
      <template v-slot:top>
        <tool-bar/>
      </template>
      <template v-slot:item="{ item }">
        <tr class="flex">
          <td v-for="(header, index) in headers" :key="header.value" class="border-right pl-0 pr-0 pt-4 pb-4 flex align-center">
            <template v-if="index === 0">
                {{item[0].roomDetails.name}}
            </template>
            <template v-else>
                <AppCol :bookings="bookingsToShow(item, header.value)" :header-date="header.value"/>
            </template>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
  </template>


<script>
import {mapGetters} from "vuex"
import AppCol from "@/components/AppCol.vue"
import ToolBar from "@/components/ToolBar.vue"

export default {
  components: {AppCol, ToolBar},
  data() {
    return {
      items: []
    }
  },
  created () {
    this.$store.dispatch("dates/setCurrentWeekDates")
  },
  computed: {
    ...mapGetters("dates", ["getCurrentDate", "getCurrentWeekDates"]),
    headers() {
      return this.generateHeaders()
    }
  },
  mounted() {
    this.$store.dispatch('bookings/fetchData')
        .then(data => {
          this.items = data
        })
        .catch(error => {
          console.error('Error while fetching data', error)
        })
  },
  methods: {
    generateHeaders() {
      const currentWeekDates = this.getCurrentWeekDates
      const headers = [{ text: '', value: 'name' }]
      currentWeekDates.forEach((date) => {
        headers.push({ text: `${date}`, value: date})
      })
      return headers
    },
    bookingsToShow(bookedRooms, headerDate) {
      if (!Array.isArray(bookedRooms)) {
        return []
      }
      return bookedRooms.filter(bookedItem => {
        return headerDate >= bookedItem.start && headerDate <= bookedItem.end
      })
    }
  }
}
</script>

<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
