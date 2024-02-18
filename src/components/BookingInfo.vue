<template>
  <div>
    <v-dialog v-model="toShow" width="500" overlay-opacity="0">
      <template>
        <v-card title="Dialog">
          <v-card-text>
            <div class="flex flex-column pt-4 pb-4" v-if="info">
            <h3>{{info.name}}</h3>
              <div>{{info.phone}}</div>
              <div>{{info.email}}</div>
              <div class="pt-4">{{info.typeOfApartments}}</div>
              <h4>Number of Guests:</h4>
              <div>Adults: {{info.guestInfo.adults}}</div>
              <div>Children: {{info.guestInfo.adults}}</div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "BookingInfo",
  props: {
    dialog: Boolean,
    info: Object
  },
  computed: {
    toShow() {
      return this.dialog
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    }
  }
};
</script>
