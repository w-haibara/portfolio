<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import BtnEvent from "@/mixins/BtnEvent";

export default {
  name: "w-haibara",
  mixins: [BtnEvent],
  mounted() {
    this.btnEventsInit();
  },
};
</script>
