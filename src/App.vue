<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-app-bar-title>Booking</v-app-bar-title>
      </div>
    </v-app-bar>

    <v-main>
      <app-table />
    </v-main>
  </v-app>
</template>

<script>
import AppTable from "@/components/AppTable.vue";

export default {
  name: 'App',
  components: {AppTable},

  data: () => ({
    //
  }),
};
</script>
