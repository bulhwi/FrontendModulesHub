<template>
  <div>
<!--    <h1>Chart.js</h1>-->
<!--    <BarChart :propsData="chartDataSet"></BarChart>-->
<!--    <LineChart></LineChart>-->
<!--    <TransitionSample />-->
<!--    <ListSample />-->
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import TransitionSample from "@/components/TransitionSample";
import ListSample from './components/ListSample';

export default {
  name: "App",
  components: {BarChart, LineChart, TransitionSample, ListSample},
  data() {
    return {
      chartDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }]
    }
  },
  created() {
    //his.chartDataSet = axios.get('charts/line/1').then(response => response.data).catch(error => console.log(error));
  }
}
</script>

<style>

</style>
