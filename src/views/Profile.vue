<template>
  <v-sheet class="blue-grey--text text--darken-4" tile>
    <v-container>
      <h1 class="font-weight-light">Profile</h1>
      <div id="mainText"></div>

      <ul class="py-5">
        <li v-for="(contact, i) in contacts" :key="i">
          {{ contact.title }}:
          <a
            v-if="contact.link"
            :href="contact.link"
            target="_blank"
            rel="noopener"
          >
            {{ contact.id0 }}
          </a>
          <span v-else>
            {{ contact.id0 }}
          </span>
        </li>
      </ul>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  mounted: function () {
    document.getElementById("mainText").innerHTML = this.$content.body;
  },
  computed: {
    contacts: function () {
      return this.$content.contacts;
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
