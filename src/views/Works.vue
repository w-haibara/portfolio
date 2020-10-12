
<template>
  <v-sheet class="blue-grey--text text--darken-4" height="100%" tile>
    <v-container>
      <h1 class="font-weight-medium">Works</h1>
      <v-layout wrap>
        <v-flex v-for="(item, i) in items" :key="i">
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :class="`elevation-${hover ? 4 : 0}`"
                class="transition-swing my-1"
                flat
                tile
                color="grey lighten-4"
                width="24vw"
              >
                <v-card-title>
                  <span>
                    <a :href="item.link" target="_blank" rel="noopener">
                      {{ item.title }}
                      <v-icon color="blue-grey darken-5" x-small right>
                        fas fa-external-link-alt
                      </v-icon>
                    </a>
                  </span>
                </v-card-title>
                <v-card-subtitle>
                  {{ item.subtitle }}
                </v-card-subtitle>
                <v-card-text>
                  <v-row v-if="item.dev" no-gutters>
                    <v-icon color="blue-grey darken-5" x-small left>
                      mdi-wrench
                    </v-icon>
                    <span>開発中</span>
                  </v-row>
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
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
        title: "gelato",
        subtitle: "Go / Raspberry Pi",
        text:
          "おうちのRaspberry Pi をブラウザのみで管理できるようにする、Goアプリケーション。現在はWebコンソールでの操作が可能。リモートデスクトップ機能やセキュリティ機構を開発中。",
        link: "https://github.com/w-haibara/gelato",
        dev: true,
      },
      {
        title: "jelly",
        subtitle: "Go / Slack App / CI/CD",
        text:
          "デプロイ自動化のためのSlack App。このページもこれによってデプロイされている。",
        link: "https://github.com/w-haibara/jelly",
      },
      {
        title: "yohkan",
        subtitle: "GO / Ray Tracing",
        text:
          "Go言語製レイトレーサー。Phongの反射モデルが実装済み。影や完全鏡面反射のレンダラを開発中。",
        link: "https://github.com/w-haibara/yohkan",
        dev: true,
      },
      {
        title: "vanilla",
        subtitle: "Go / HTTP / AES",
        text:
          "イントラネットのようなHTTPSを使いづらい環境に向けた、Go言語のL7暗号化ライブラリ。クライアント側のJSライブラリを開発中。",
        link: "https://github.com/w-haibara/vanilla",
        dev: true,
      },
      {
        title: "vuewat",
        subtitle: "WebAssembly / Vue.js",
        text:
          "フルクライアントサイドのWasm Text Format to Wasm コンパイラ。現在は、関数名・引数・戻り値が固定された上での引数同士の四則演算が可能。",
        link: "https://github.com/w-haibara/vuewat",
        dev: true,
      },
      {
        title: "potsuri",
        subtitle: "Vue.js / SNS",
        text: "一人用SNS。",
        link: "https://github.com/w-haibara/potsuri",
        dev: false,
      },
      {
        title: "vtd4",
        subtitle: "Vue.js / 4bit CPU",
        text: "4bit CPU: TD4 のVue.js 製エミュレータ。",
        link: "https://github.com/w-haibara/vtd4",
        dev: false,
      },
      {
        title: "syshello",
        subtitle: "Linux system call / C / ShellScript",
        text: "Linuxのシステムコールの開発を楽にするためのシェルスクリプト。",
        link: "https://github.com/w-haibara/syshello",
        dev: false,
      },
      {
        title: "caes",
        subtitle: "C / AES",
        text: "AES-128-CTR のC言語フルスクラッチ実装。",
        link: "https://github.com/w-haibara/caes",
        dev: false,
      },
      {
        title: "portfolio",
        subtitle: "Vue.js / SPA",
        text: "ご覧いただいている、このポートフォリオ。",
        link: "https://github.com/w-haibara/portfolio",
        dev: false,
      },
    ],
  }),
};
</script>

<style scoped>
span a {
  color: #546e7a;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}

span a:hover {
  color: black;
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>