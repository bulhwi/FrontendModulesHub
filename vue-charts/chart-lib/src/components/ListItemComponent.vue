<template>
  <li>
    {{name}}
  </li>
</template>

<script>
export default {
  name: 'ListItemComponent',
  props:{
    id: Number,
    name: String
  },
  data() {
    return {

    };
  }

};
</script>

<style scoped>

</style>