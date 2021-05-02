<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Works</h1>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            target="_blank"
            rel="noopener"
            color="blue-grey darken-5"
          >
            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                <span class="font-weight-bold" style="font-size: large">
                  {{ item.title }}
                </span>
                <v-icon color="blue-grey darken-5" x-small right>
                  fas fa-external-link-alt
                </v-icon>
              </v-list-item-title>
              <v-list-item-subtitle class="wrap-text">
                <span class="font-weight-light" style="font-size: large">
                  {{ item.text }}
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
    items: function () {
      return [
        {
          title: "unlambda",
          text: "A toy Unlambda interpreter written in Go.",
          href: "https://github.com/w-haibara/unlambda",
        },
        {
          title: "osoba",
          text: "Static site deployment manager.",
          href: "https://github.com/w-haibara/osoba",
        },
        {
          title: "vtd4",
          text: "TD4 emulator written in Vue.js with Vuetify.",
          href: "https://github.com/w-haibara/vtd4",
        },
        {
          title: "syshello",
          text: "A script for development of Linux system call.",
          href: "https://github.com/w-haibara/syshello",
        },
        {
          title: "caes",
          text: "Full scratch implementation of AES-128-CTR for study.",
          href: "https://github.com/w-haibara/caes",
        },
      ];
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