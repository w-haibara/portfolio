<template>
  <v-app>
    <v-app-bar app dense flat color="white">
      <v-toolbar-title>w-haibara.com</v-toolbar-title>
      <div>
        <v-tabs fixed-tabs class="ml-5" color="black">
          <v-tab to="/profile">profile</v-tab>
          <v-tab to="/logs">logs</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="white">
      <v-spacer></v-spacer>
      <span>source:</span>
      <a
        href="https://github.com/w-haibara/portfolio"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
      <span class="copyright ml-5">&copy; {{ now }} w-haibara.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "w-haibara",
  data: () => ({
    now: "",
  }),
  computed: {
    links: function () {
      return [
        {
          name: "Profile",
          to: "/profile",
        },
      ];
    },
  },
  created() {
    const d = new Date();
    this.now = d.getFullYear();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
.v-application {
  font-family: "Source Code Pro" !important;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border-left: solid 1px #ececec;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px #fff;
}
</style>