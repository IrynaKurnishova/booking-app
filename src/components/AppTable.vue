<template>
  <v-card>
    <v-data-table :headers="headers" :items="Object.values(items)" dense outlined>
      <template v-slot:top>
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
      <template v-slot:item="{ item }">
        <tr class="flex">
          <td v-for="(header, index) in headers" :key="header.value" class="border-right pl-0 pr-0 pt-4 pb-4 flex align-center">
            <template v-if="index === 0">
                {{item[0].roomDetails.name}}
            </template>
            <template v-else>
              <AppCell :booked-rooms="item" :header-date="header.value" class="flex"/>
            </template>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
  </template>


<script>
import {mapGetters} from "vuex";
import AppCell from "@/components/AppCell.vue";
import moment from 'moment'

export default {
  components: {AppCell},
  data() {
    return {
      items: [],
      dateTitle: moment().format('YYYY-MM-DD')
    };
  },
  created () {
    this.$store.dispatch("dates/setCurrentWeekDates");
  },
  computed: {
    ...mapGetters("dates", ["getCurrentDate", "getCurrentWeekDates"]),
    headers() {
      return this.generateHeaders();
    },
  },
  mounted() {
    this.$store.dispatch('rooms/fetchData')
        .then(data => {
          console.log(data)
          this.items = data;
        })
        .catch(error => {
          console.error('Ошибка при получении данных:', error);
        });
  },
  methods: {
    generateHeaders() {
      const currentWeekDates = this.getCurrentWeekDates;
      const headers = [{ text: '', value: 'name' }];
      currentWeekDates.forEach((date) => {
        headers.push({ text: `${date}`, value: date});
      });
      return headers;
    }
  }
};
</script>

<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
