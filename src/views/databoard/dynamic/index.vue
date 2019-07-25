<template>
  <div class="app-container">
    withdrawal explain:
  </div>
</template>

<script>
  import { getUserList } from '@/api/databoard'

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
        getUserList().then(response => {
          console.log('res' + response.data.userList)
          this.list = response.data.userList
          this.listLoading = false
        })
      }
    }
  }
</script>
