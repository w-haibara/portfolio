<template>
  <v-app>
    <v-app-bar app color="white" dense flat fixed>
      <v-progress-linear
        :value="scrollBar()"
        color="grey darken-2"
        striped
        height="1vh"
      ></v-progress-linear>
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
import PageScroll from "@/mixins/PageScroll";

export default {
  name: "w-haibara",
  mixins: [PageScroll],
  data: () => ({
    transitionPrevHeight: 0,
  }),
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
    scrollBar() {
      return (
        (this.pageScrollY /
          (this.pageScrollTh * this.pageScrollRouterPathsNum)) *
        100
      );
    },
  },
  mounted() {
    this.pageScrollInit();
    console.log(this.pageScrollCurrentPathNum);
  },
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