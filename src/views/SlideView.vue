<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <v-container v-if="!loaded" fill-height fluid>
        <v-layout class="align-center justify-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="blue-gray"
            indeterminate
          ></v-progress-circular>
        </v-layout>
      </v-container>
      <iframe
        :src="
          'https://docs.google.com/presentation/d/' +
          $route.params.id +
          '/embed?start=false&loop=false&delayms=3000'
        "
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        @load="load"
        v-show="loaded"
      ></iframe>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  methods: {
    load: function () {
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>