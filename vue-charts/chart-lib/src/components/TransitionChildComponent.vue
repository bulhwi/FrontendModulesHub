<template>
  <div class='height-400 width-400 bg-color-red left'>
    <button @click='closeEvent()'>닫기</button>
  </div>
</template>

<script>
export default {
  name: 'TransitionChildComponent',
  data() {
    return {

    };
  },
  methods:{
    closeEvent() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.height-400 {
  height: 400px;
}
.width-400{
  width: 400px;
}
.bg-color-red {
  background-color: red;
}
/*.left {*/
/*  display: flex;*/
/*  margin-left: auto;*/
/*}*/
</style>