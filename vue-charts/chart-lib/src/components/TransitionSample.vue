<template>
  <div id="demo">
    <button v-on:click="open('coupon')">
      Toggle
    </button>
    <div :class='text !== "coupon" ? "none" : ""'>
      <transition name="slide-fade" mode='out-in'>
  <!--      <p v-if="show">hello</p>-->
        <TransitionChildComponent v-show='text === "coupon"' @close='close'></TransitionChildComponent>
      </transition>
    </div>
  </div>
</template>

<script>
import TransitionChildComponent from "./TransitionChildComponent";
export default {
  name: 'TransitionSample',
  components:{TransitionChildComponent},
  data() {
    return {
      show: true,
      text:""
    }
  },
  methods:{
    close() {
      console.log("call");
      this.show = true;
      this.text = null;
    },
    open(text) {
      this.text = text;
    }
  }
};
</script>

<style scoped>
.none {
  display: none;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .5s !important;
}
.slide-fade-enter, .slide-fade-leave-to  {
  opacity: 0 !important;
  transform: translateY(10rem) !important;
}
</style>