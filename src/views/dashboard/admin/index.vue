<!--指示板-->
<template>
  <div class="dashboard-editor-container">

    <!--Panel面板组件-->
    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <!--曲线表单-->
      <!--:chart-data: LineChart.charData-->
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

  </div>
</template>


<script>
  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'
  import RaddarChart from './components/RaddarChart'
  import PieChart from './components/PieChart'
  import BarChart from './components/BarChart'
  import TransactionTable from './components/TransactionTable'
  import TodoList from './components/TodoList'
  import BoxCard from './components/BoxCard'

  // LineChart.chartData数据: setOption()调用
  const lineChartData = {
    newVisitis: {
      line1: '用户注册量',
      line1Data: [100, 120, 161, 134, 105, 160, 165]
    },
    messages: {
      line1: '用户消费量',
      line1Data: [200, 192, 120, 144, 160, 130, 140]
    }
  }

  export default {
    name: 'dashboard-admin',
    components: {
      PanelGroup,
      LineChart,
      RaddarChart,
      PieChart,
      BarChart,
      TransactionTable,
      TodoList,
      BoxCard
    },
    data() {
      return {
        // 设置LineChart.数据
        lineChartData: lineChartData.newVisitis
      }
    },
    methods: {
      // 切换LineChart
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
