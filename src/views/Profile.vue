
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

      <ul class="py-5">
        <li v-for="(link, i) in links" :key="i">
          {{ link.media }}:
          <a v-if="link.href" :href="link.href" target="_blank" rel="noopener">
            {{ link.name }}
          </a>
          <span v-else>
            {{ link.name }}
          </span>
        </li>
      </ul>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    links: function () {
      return [
        {
          media: "Twitter",
          name: "@w_haibara",
          href: "https://twitter.com/w_haibara  ",
        },
        {
          media: "GitHub",
          name: "w-haibara",
          href: "http://github.com/w-haibara",
        },
        {
          media: "Facebook",
          name: "Wataru Haibara",
          href: "https://www.facebook.com/wataru.haibara.923",
        },
        {
          media: "Blog",
          name: "id:w_haibara",
          href: "https://haibara-works.hatenablog.com/",
        },
        {
          media: "Mail",
          name: "haibara[at]local.or.jp",
          href: "",
        },
      ];
    },
  },
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

a {
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
  -webkit-transform: scale(1);
  transform: scale(1);
}
a:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>