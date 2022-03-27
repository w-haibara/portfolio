<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Profile</h1>
      <p>
        Software Engineer at
        <a href="https://corp.raksul.com" target="_blank" rel="noopener"
          >RAKSUL INC</a
        >. <br />
        I’m interested in Web and System software.
      </p>

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
          href: "https://twitter.com/w_haibara",
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
}
</style>
