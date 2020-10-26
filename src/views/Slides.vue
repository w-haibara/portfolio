<template>
  <v-sheet class="blue-grey--text text--darken-4" height="100%" tile>
    <v-container>
      <h1 class="font-weight-medium">Slides</h1>
      <div v-if="!slidesLoaded">
        <v-progress-linear
          indeterminate
          color="blue-grey darken-5"
          bottom
        ></v-progress-linear>
      </div>
      <div v-else>
        <v-layout wrap>
          <v-flex v-for="slide in slides" :key="slide.url">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card
                  :class="`elevation-${hover ? 4 : 0}`"
                  class="transition-swing my-1"
                  flat
                  tile
                  color="grey lighten-4"
                  width="24vw"
                  :href="slide.url"
                  target="_blank"
                  rel="noopener"
                >
                  <v-img :src="slide.thumbnail"></v-img>
                  <v-card-title>
                    <span>
                      {{ slide.name }}
                      <v-icon color="blue-grey darken-5" x-small right>
                        fas fa-external-link-alt
                      </v-icon>
                    </span>
                  </v-card-title>
                  <v-card-text>
                    {{ slide.created }}
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    slides: {
      id: {
        name: "",
        created: "",
        thumbnail: "",
        url: "",
      },
    },
    slidesLoaded: false,
  }),
  created() {
    this.axios
      .get(
        "https://script.google.com/macros/s/AKfycbyYqQNIN0y6mYhMQG6Kk6j-hip-pWUelYkRXxV_acq2rz5pWto/exec"
      )
      .then((response) => {
        this.slides = response.data;
        this.slidesLoaded = true;
      });
  },
};
</script>