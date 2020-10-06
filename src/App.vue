<template>
  <v-app>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import BtnEvent from "@/mixins/BtnEvent";

export default {
  name: "w-haibara",
  mixins: [BtnEvent],
  data: () => ({
    transitionPrevHeight: 0,
  }),
  methods: {
    beforeLeave(element) {
      this.transitionPrevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.transitionPrevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
  mounted() {
    this.pageScrollInit();
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>