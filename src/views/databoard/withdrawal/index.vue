<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>

      <!--userId-->
      <el-table-column label='ID' width="95" align="center">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>

      <!--userPhoneNumber-->
      <el-table-column label="提现金额" width="250" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.withdrawalMoney}}</span>
        </template>
      </el-table-column>

      <!--userLastLogin-->
      <el-table-column label="提现时间" width="250" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.withdrawalTime}}</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { getWithdrawalList } from '@/api/databoard'

  export default {
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getWithdrawalList().then(response => {
          console.log('res' + response.data.withdrawalList)
          this.list = response.data.withdrawalList
          this.listLoading = false
        })
      }
    }
  }
</script>
