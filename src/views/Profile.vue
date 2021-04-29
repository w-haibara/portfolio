
<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">w-haibara</h1>
      <div>
        <p class="paragraph font-weight-meduim">
          Student learning about information technology. And next year, I will
          be a software engineer at Tokyo.
        </p>
        <p class="paragraph font-weight-meduim">
          I am interested in the Web, systems programming, and community of
          engineers.
        </p>
      </div>

      <v-list dense>
        <v-subheader
          class="blue-grey--text text--darken-4 font-weight-meduim"
          style="font-size: large"
          >Activity</v-subheader
        >
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            target="_blank"
            rel="noopener"
            color="blue-grey darken-5"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="blue-grey darken-5"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="wrap-text">
                {{ item.duration }}
                <span class="font-weight-bold">{{ item.text }}</span>
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
  data: () => ({
    items: [
      {
        text: "Participate in internship at Hatena Co., Ltd.",
        icon: "mdi-fountain-pen-tip",
        href: "https://hatenacorp.jp/intern2020/first",
      },
      {
        text:
          "Lecture about vulnerability of C code at Security Mini Camp in Hokkaido",
        icon: "mdi-security",
        href: "https://www.security-camp.or.jp/minicamp/hokkaido2020.html",
      },
      {
        text: "Gave a presentation at JANOG45",
        icon: "mdi-microphone-variant",
        href: "https://www.janog.gr.jp/meeting/janog45/newsletter/iot",
      },
      {
        text: "Survey and develop about IoT Security at SecHack365",
        icon: "mdi-security",
        href: "http://sechack365.nict.go.jp/",
      },
      {
        text: "LOCAL Students member(一般社団法人LOCAL)",
        icon: "mdi-human-greeting",
        href: "https://local.or.jp/",
      },
      {
        text:
          "Learning information technology at Muroran Institute of Technology",
        icon: "mdi-school",
        href: "https://www.muroran-it.ac.jp/",
      },
    ],
    height: 0,
  }),
};
</script>

<style scoped>
.paragraph {
  text-indent: 1em;
  margin: 0;
}

.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>