
<template>
  <v-sheet class="blue-grey--text text--darken-4" height="100%" tile>
    <v-container>
      <v-layout wrap>
        <v-flex>
          <h1 class="font-weight-medium">Works</h1>
          <v-row justify="center">
            <v-col v-for="(item, i) in items" :key="i">
              <v-hover>
                <template v-slot="{ hover }">
                  <v-card
                    :href="item.link"
                    target="_blank"
                    rel="noopener"
                    :class="`elevation-${hover ? 4 : 0}`"
                    class="transition-swing"
                    flat
                    tile
                    color="grey lighten-5"
                    min-width="40vh"
                  >
                    <v-card-title>
                      {{ item.title }}
                      <v-icon color="blue-grey darken-5" x-small right>
                        fas fa-external-link-alt
                      </v-icon>
                    </v-card-title>
                    <v-card-subtitle>
                      {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text> {{ item.text }} </v-card-text>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "repo1",
        subtitle: "aaa",
        text: "aaaaaaaaa",
        link: "https://github.com/w-haibara/portfolio/",
      },
      {
        title: "repo2",
        subtitle:
          "bbb---------------------------------------------------------------------------------------------------------------------------------------------",
        text: "bbbbbbbbb",
        link: "https://github.com/w-haibara/portfolio/",
      },
      {
        title: "repo3",
        subtitle: "ccc",
        text:
          "ccccccccc--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
        link: "https://github.com/w-haibara/portfolio/",
      },
      {
        title: "repo4",
        subtitle: "aaa",
        text: "aaaaaaaaa",
        link: "https://github.com/w-haibara/portfolio/",
      },
      {
        title: "repo5",
        subtitle: "bbb-----------------------------------------------",
        text: "bbbbbbbbb",
        link: "https://github.com/w-haibara/portfolio/",
      },
      {
        title: "repo6",
        subtitle: "ccc",
        text:
          "ccccccccc--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
        link: "https://github.com/w-haibara/portfolio/",
      },
    ],
  }),
};
</script>