<template>
  <v-app>
    <v-app-bar app absolute dense flat color="white">
      <v-menu offset-y v-if="$vuetify.breakpoint.xs">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, i) in links" :key="i">
            <v-list-item-title>
              <router-link class="pl-3" :to="link.to">
                {{ link.name }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title class="px-3">
        <router-link to="/" class="text-decoration-none black--text">
          w-haibara.com
        </router-link>
      </v-toolbar-title>

      <template v-if="!$vuetify.breakpoint.xs">
        <span class="pl-3" v-for="(link, i) in links" :key="i">
          <router-link :to="link.to">
            {{ link.name }}
          </router-link>
        </span>
      </template>
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
      {
        to: "/slides",
        name: "Slides",
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