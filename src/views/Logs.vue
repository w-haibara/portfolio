<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Logs</h1>
      <v-list dense v-for="(logs, year) in logs" :key="year">
        <v-subheader
          class="blue-grey--text text--darken-4 font-weight-meduim"
          style="font-size: large"
        >
          {{ logs.year }}
        </v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="(log, i) in logs.log"
            :key="i"
            :href="log.link"
            target="_blank"
            rel="noopener"
            color="blue-grey darken-5"
          >
            <v-list-item-icon>
              <v-icon v-text="log.icon" color="blue-grey darken-5"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                <span class="font-weight-medium" style="font-size: medium">
                  {{ log.title }}
                </span>
                <v-icon color="blue-grey darken-5" x-small right>
                  fas fa-external-link-alt
                </v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    logs: function () {
      console.log(this.$content.logs)
      return this.$content.logs;
    },
  },
};
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
