<template>
  <div>
    <ListComponent :list='list'></ListComponent>
  </div>
</template>

<script>
import ListComponent from './ListComponent';
export default {
  name: 'ListSample',
  components:{ListComponent},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 1000; i++) {
        let obj = {
          id: i,
          name: `name_${i}`
        }
        this.list.push(obj);
      }
      console.log(this.list);
    }

  }
};
</script>

<style scoped>

</style>