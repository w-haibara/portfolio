<template>
  <v-app>
    <v-app-bar app absolute dense flat color="white">
      <v-toolbar-title class="px-3">w-haibara.com</v-toolbar-title>
      <div v-for="(link, i) in links" :key="i">
        <router-link class="pl-3" :to="link.to">{{ link.name }}</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="white">
      <v-spacer></v-spacer>
      <span>source:</span>
      <a
        href="https://github.com/w-haibara/w-haibara.com"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
      <span class="copyright ml-5">&copy; 2021 w-haibara</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "w-haibara",
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
};
</script>

<script>
export default {
  data: () => ({
    links: [
      {
        to: "/profile",
        name: "Profile",
      },
      {
        to: "/logs",
        name: "Logs",
      },
      {
        to: "/works",
        name: "Works",
      },
    ],
  }),
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