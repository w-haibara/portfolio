<template>
  <v-app>
    <v-app-bar app color="white" dense flat fixed>
      <v-tabs color="basil" grow>
        <v-tab v-for="link in links" :key="link.to" :to="link.to">
          {{ link.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="fadeBeforeLeave"
        @enter="fadeEnter"
        @afterEnter="fadeAfterEnter"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "w-haibara",
  data: () => ({
    transitionPrevHeight: 0,
  }),
  computed: {
    links: function () {
      return [
        {
          name: "Profile",
          to: "/profile",
        },
        {
          name: "Works",
          to: "/works",
        },
        {
          name: "Slides",
          to: "/slides",
        },
      ];
    },
  },
  methods: {
    fadeBeforeLeave(element) {
      this.transitionPrevHeight = getComputedStyle(element).height;
    },
    fadeEnter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.transitionPrevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    fadeAfterEnter(element) {
      element.style.height = "auto";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>