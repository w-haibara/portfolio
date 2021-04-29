<template>
  <v-app>
    <v-app-bar app dense flat color="white">
      <v-app-bar-title>w-haibara.com</v-app-bar-title>
      <div>
        <v-tabs fixed-tabs color="black">
          <v-tab to="/profile">Profile</v-tab>
          <v-tab to="/links">links</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "w-haibara",
  data: () => ({}),
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
  methods: {},
  mounted() {},
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