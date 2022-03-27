<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-medium">Slides</h1>
      <div v-if="!slidesLoaded">
        <v-row>
          <v-col cols="6">
            <v-skeleton-loader
              type="list-item-two-line"
              v-for="i in 6"
              :key="i"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-list dense>
          <v-list-item-group>
            <v-list-item
              v-for="slide in slides"
              :key="slide.id"
              :to="'/slides/' + slide.id"
              color="blue-grey darken-5"
            >
              <v-list-item-content>
                <v-list-item-title class="wrap-text">
                  <span class="font-weight-bold" style="font-size: large">
                    {{ slide.title }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle class="wrap-text">
                  <span class="font-weight-light" style="font-size: large">
                    {{ slide.created }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import lscache from "lscache";

export default {
  data: () => ({
    slides: [
      {
        title: "",
        url: "",
        id: "",
        created: "",
      },
    ],
    slidesLoaded: false,
  }),
  created() {
    const key = "slidesData";
    if (!lscache.supported() || !lscache.get(key)) {
      this.axios
        .get(
          "https://script.google.com/macros/s/AKfycbxqV4ImsFGIViEIaN9E2WAQfnFOO7fDTR6K688TZxmxbsaWBjo-oqmAfwog0rJYUAP0/exec"
        )
        .then((response) => {
          this.slides = response.data;
          lscache.set(key, response.data, 1440);
          this.slidesLoaded = true;
        });
    } else {
      this.slides = lscache.get(key);
      this.slidesLoaded = true;
    }
  },
};
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
