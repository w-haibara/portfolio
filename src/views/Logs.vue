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
          year: 2022,
          logs: [
            {
              text: "Start working at RAKSUL INC.",
              icon: "mdi-office-building-outline",
              href: "https://corp.raksul.com",
            },
            {
              text: "Obtained a degree from Muroran Institute of Technology.",
              icon: "mdi-school",
              href: "https://www.muroran-it.ac.jp/",
            },
          ],
        },
        {
          year: 2021,
          logs: [
            {
              text: "Learned cybersecurity at Security Camp.",
              icon: "mdi-security",
              href: "https://www.ipa.go.jp/jinzai/camp/2020/zenkoku2020_index.html",
            },
            {
              text: "Participated in an internship at RAKSUL INC.",
              icon: "mdi-office-building-outline",
              href: "https://tech.raksul.com/2022/02/21/22graduate-intern/",
            },
            {
              text: "Participated in SecHack365 as an assistant.",
              icon: "mdi-security",
              href: "https://sechack365.nict.go.jp/report/2021/report_week01.html",
            },
          ],
        },
        {
          year: 2020,
          logs: [
            {
              text: "Lectured at Security Mini Camp in Hokkaido.",
              icon: "mdi-microphone-variant",
              href: "https://www.security-camp.or.jp/minicamp/hokkaido2020.html",
            },
            {
              text: "Participated in an internship at Hatena Co., Ltd.",
              icon: "mdi-office-building-outline",
              href: "https://hatenacorp.jp/intern2020/first",
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
              text: "Learned cybersecurity at SecHack365.",
              icon: "mdi-security",
              href: "http://sechack365.nict.go.jp/",
            },
          ],
        },
        {
          year: 2018,
          logs: [
            {
              text: "Joined LOCAL(一般社団法人LOCAL).",
              icon: "mdi-human-greeting",
              href: "https://local.or.jp/",
            },
            {
              text: "Entered Muroran Institute of Technology.",
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
