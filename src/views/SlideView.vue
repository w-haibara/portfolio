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
        :src="iframeURL"
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
import lscache from "lscache";

export default {
  data: () => ({
    slides: [],
    loaded: false,
    iframeURL: "",
  }),
  methods: {
    load: function () {
      this.loaded = true;
    },
    setURL: function () {
      const slide = this.slides.find((elm) => elm.id == this.$route.params.id);
      if (slide === undefined) {
        this.$router.push("/NotFound");
        return;
      }
      this.iframeURL =
        "https://docs.google.com/presentation/d/" +
        slide.id +
        "/embed?start=false&loop=false&delayms=3000";
    },
  },
  created() {
    const key = "slidesData";
    if (!lscache.supported() || !lscache.get(key)) {
      console.log("axios get");
      this.axios
        .get(
          "https://script.google.com/macros/s/AKfycbxqV4ImsFGIViEIaN9E2WAQfnFOO7fDTR6K688TZxmxbsaWBjo-oqmAfwog0rJYUAP0/exec"
        )
        .then((response) => {
          this.slides = response.data;
          lscache.set(key, response.data, 1440);
          this.setURL();
        });
    } else {
      this.slides = lscache.get(key);
      this.setURL();
    }
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
