<template>
  <ul>
    <ListItemComponent v-for='item in itemList1' :name='item.name' :key='item.id'/>
    <LoginCheckComponent v-if='!isLogin' />
    <ListItemComponent v-if='itemList2.length > 0' v-for='item in itemList2' :name='item.name' :key='item.id' />
  </ul>
</template>

<script>
import ListItemComponent from './ListItemComponent';
import LoginCheckComponent from './LoginCheckComponent';
export default {
  name: 'ListComponent',
  components:{ListItemComponent, LoginCheckComponent},
  props:["list"],
  data() {
    return {
      isLogin: false
    };
  },
  created() {
  },
  methods:{

  },
  computed:{
    itemList1() {
      return this.list.slice(0, 10);
    },

    itemList2() {
      return this.list.slice(10, 20);
    }
  }
};
</script>

<style scoped>

</style>