
<template>
  <v-sheet class="blue-grey--text text--darken-4" height="100%" tile>
    <v-container>
      <v-layout wrap>
        <v-flex>
          <h1 class="font-weight-medium">Profile</h1>
          <h2 class="font-weight-light">灰原 渉 (HAIBARA Wataru)</h2>
          <v-spacer />
          <div class="paragraph font-weight-light">
            <p>
              電子と興味が移ろい、
              大学生となった今では情報技術に集中しています。
              また、地元である北海道の大学に進学してからは、道内のITコミュニティ
              LOCAL
              での学生部の運営や、学内での勉強会開催など、コミュニティ活動に注力しています。
              技術的には、運用の自動化・セキュリティに興味を持っています。
              運用技術や基盤技術、あるいは社内システムの開発・改善に従事したいと考えています。
            </p>
          </div>
        </v-flex>
        <v-flex>
          <v-list dense>
            <v-subheader
              class="font-weight-light blue-grey--text text--darken-4"
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
    height: 0,
  }),
};
</script>

<style scoped>
.paragraph {
  text-indent: 1em;
}
</style>