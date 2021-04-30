
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
        <li>
          Twitter:
          <a
            href="https://twitter.com/w_haibara"
            target="_blank"
            rel="noopener"
          >
            @w_haibara
          </a>
        </li>
        <li>
          GitHub:
          <a href="http://github.com/w-haibara" target="_blank" rel="noopener">
            w-haibara
          </a>
        </li>
        <li>
          Facebook:
          <a
            href="https://www.facebook.com/wataru.haibara.923"
            target="_blank"
            rel="noopener"
          >
            Wataru Haibara
          </a>
        </li>
        <li>
          Blog:
          <a
            href=" https://haibara-works.hatenablog.com"
            target="_blank"
            rel="noopener"
          >
            id:w_haibara
          </a>
        </li>
        <li>Mail: haibara[at]local.or.jp</li>
      </ul>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({}),
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