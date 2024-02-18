<template>
  <v-toolbar flat>
    <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
      Today
    </v-btn>
    <v-btn fab text small color="grey darken-2" @click="prev">
      <v-icon small>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn fab text small color="grey darken-2" @click="next">
      <v-icon small>mdi-chevron-right</v-icon>
    </v-btn>
    <v-toolbar-title>
      {{ dateTitle }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "ToolBar",
  computed: {
    ...mapGetters("dates", ["getCurrentDate"]),
    dateTitle() {
      return this.getCurrentDate.format('YYYY-MM-DD')
    }
  },
  methods: {
    setToday() {
      this.$store.dispatch("dates/setCurrentWeekDates")
    },
    prev() {
      this.$store.dispatch("dates/setPrevWeekDates")
    },
    next() {
      this.$store.dispatch("dates/setNextWeekDates")
    }
  }
}
</script>
