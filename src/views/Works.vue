<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Works</h1>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(work, i) in works"
            :key="i"
            :href="work.link"
            target="_blank"
            rel="noopener"
            color="blue-grey darken-5"
          >
            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                <span class="font-weight-bold" style="font-size: large">
                  {{ work.year }} {{ work.title }}
                </span>
                <v-icon color="blue-grey darken-5" x-small right>
                  fas fa-external-link-alt
                </v-icon>
              </v-list-item-title>
              <v-list-item-subtitle class="wrap-text">
                <span class="font-weight-light" style="font-size: large">
                  {{ work.desc }}
                </span>
              </v-list-item-subtitle>
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
    works: function () {
      return this.$content.works;
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
