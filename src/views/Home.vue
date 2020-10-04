
<template>
  <v-app>
    <v-content>
      <v-carousel :show-arrows="false" height="100%">
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            color="blue-grey lighten-5"
            class="blue-grey--text text--darken-4"
            height="100%"
            tile
          >
            <v-container>
              <v-layout wrap>
                <v-flex>
                  <h1 class="font-weight-medium">Profile</h1>
                  <h2 class="font-weight-light">灰原 渉 (HAIBARA Wataru)</h2>
                  <v-spacer />
                  <p class="font-weight-light" style="font-size: large">
                    室蘭工業大学 情報電子工学系学科
                    3年。LOCAL学生部部長として、北海道の技術系学生コミュニティを応援している。
                    セキュリティ・ミニキャンプ in 北海道 2018・2019に参加。
                    SecHack365 2019では「IoT用途のSoC
                    FPGA向けセキュリティ機構」というテーマに取り組んだ。
                  </p>
                </v-flex>
                <v-flex>
                  <v-list dense color="blue-grey lighten-5">
                    <v-subheader
                      class="font-weight-light blue-grey--text text--darken-4"
                      style="font-size: large"
                      >Activity</v-subheader
                    >
                    <v-list-item-group v-model="item">
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        :href="item.href"
                        target="_blank"
                        rel="noopener"
                        color="blue-grey darken-5"
                      >
                        <v-list-item-icon>
                          <v-icon
                            v-text="item.icon"
                            color="blue-grey darken-5"
                          ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>
                            <span
                              class="font-weight-light blue-grey--text text--darken-4"
                              style="font-size: large"
                            >
                              {{ item.text }}
                            </span>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            color="blue-grey lighten-5"
            class="blue-grey--text text--darken-4"
            height="100%"
            tile
          >
            <v-container>
              <v-layout wrap>
                <v-flex>
                  <h1 class="font-weight-medium">Works</h1>
                  <h2 class="font-italic font-weight-thin">Coming Soon</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-sheet
            color="blue-grey lighten-5"
            class="blue-grey--text text--darken-4"
            height="100%"
            tile
          >
            <v-container>
              <v-layout wrap>
                <v-flex>
                  <h1 class="font-weight-medium">Slides</h1>
                  <h2 class="font-italic font-weight-thin">Coming Soon</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "室蘭工業大学 情報電子工学系学科",
        icon: "mdi-school",
        href: "https://www.muroran-it.ac.jp/",
      },
      {
        text: "一般社団法人LOCAL 学生部 部長",
        icon: "mdi-human-greeting",
        href: "https://local.or.jp/",
      },
      {
        text: "SecHack365 2019年度 トレーニー",
        icon: "mdi-security",
        href: "http://sechack365.nict.go.jp/",
      },
      {
        text: "JANOG45 ミーティング プログラム発表",
        icon: "mdi-microphone-variant",
        href: "https://www.janog.gr.jp/meeting/janog45/newsletter/iot",
      },
      {
        text: "セキュリティ・ミニキャンプ in 北海道 2020 講師",
        icon: "mdi-security",
        href: "https://www.security-camp.or.jp/minicamp/hokkaido2020.html",
      },
    ],
  }),
};
</script>