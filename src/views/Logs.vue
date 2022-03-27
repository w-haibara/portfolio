<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Logs</h1>
      <v-list dense v-for="(item, year) in items" :key="year">
        <v-subheader
          class="blue-grey--text text--darken-4 font-weight-meduim"
          style="font-size: large"
        >
          {{ item.year }}
        </v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="(log, i) in item.logs"
            :key="i"
            :href="log.href"
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
                  {{ log.text }}
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
    items: function () {
      return [
        {
          year: 2020,
          logs: [
            {
              text: "Participate in internship at Hatena Co., Ltd.",
              icon: "mdi-fountain-pen-tip",
              href: "https://hatenacorp.jp/intern2020/first",
            },
            {
              text: "Lecture about vulnerability of C code at Security Mini Camp in Hokkaido.",
              icon: "mdi-security",
              href: "https://www.security-camp.or.jp/minicamp/hokkaido2020.html",
            },
          ],
        },
        {
          year: 2019,
          logs: [
            {
              text: "Gave a presentation at JANOG45.",
              icon: "mdi-microphone-variant",
              href: "https://www.janog.gr.jp/meeting/janog45/newsletter/iot",
            },
            {
              text: "Survey and develop about IoT Security at SecHack365.",
              icon: "mdi-security",
              href: "http://sechack365.nict.go.jp/",
            },
          ],
        },
        {
          year: 2018,
          logs: [
            {
              text: "Member of LOCAL Students(一般社団法人LOCAL).",
              icon: "mdi-human-greeting",
              href: "https://local.or.jp/",
            },
            {
              text: "Learn information technology at Muroran Institute of Technology (~2022).",
              icon: "mdi-school",
              href: "https://www.muroran-it.ac.jp/",
            },
          ],
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
