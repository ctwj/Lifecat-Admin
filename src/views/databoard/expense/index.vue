<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>

      <!--userId-->
      <el-table-column label='ID' width="95" align="center">
        <template slot-scope="scope">
          {{scope.row.userId}}
        </template>
      </el-table-column>

      <!--userAccountName-->
      <el-table-column label="用户名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userAccountName}}</span>
        </template>
      </el-table-column>

      <!--userName-->
      <el-table-column label="昵称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
  

      <!--userPhoneNumber-->
      <el-table-column label="电话号码" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userPhoneNumber}}</span>
        </template>
      </el-table-column>

      <!--userGmtCreate-->
      <el-table-column label="注册时间" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userGmtCreate}}</span>
        </template>
      </el-table-column>

      <!--userLoginCount-->
      <el-table-column label="消费金额" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.userLoginCount}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Actions" min-width="200" align="center" prop="created_at">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { getExpenseList } from '@/api/databoard'

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
        getExpenseList().then(response => {
          console.log('res' + response.data.expenseList)
          this.list = response.data.expenseList
          this.listLoading = false
        })
      }
    }
  }
</script>
