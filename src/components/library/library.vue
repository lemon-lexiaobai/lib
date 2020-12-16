<template>
  <div>
    <p>借阅信息管理</p>
    <a-col :span="16" :offset="4">
      <a-table
        :rowKey="record => record.id"
        :columns="columns"
        :data-source="borrowed"
      ></a-table>
    </a-col>
  </div>
</template>

<script>
import { getBorrow, getBook, getCategory } from 'common/js/cache'

const columns = [
  {
    title: '图书名称',
    dataIndex: 'bookName'
  },
  {
    title: '借阅人',
    dataIndex: 'personName'
  },
  {
    title: '借阅人ID',
    dataIndex: 'personId'
  },
  {
    title: '借阅时间',
    dataIndex: 'startDate'
  },
  {
    title: '(应)归还时间',
    dataIndex: 'endDate'
  },
  {
    title: '状态',
    dataIndex: 'borrowState'
  }
]

export default {
  name: 'library',
  data() {
    return {
      borrowInfo: [],
      books: [],
      categories: [],
      columns
    }
  },
  created() {
    this._getBorrow()
    this._getBook()
    this._getCategory()
  },
  methods: {
    _getBorrow() {
      this.borrowInfo = getBorrow()
    },
    _getBook() {
      this.books = getBook()
    },
    _getCategory() {
      this.categories = getCategory()
    }
  },
  computed: {
    borrowed() {
      let res = []
      for (let i = 0; i < this.borrowInfo.length; i++) {
        let startDate = new Date(this.borrowInfo[i].startDate)
        let endDate = new Date(this.borrowInfo[i].endDate)
        res.push({
          id: this.borrowInfo[i].borrowId,
          bookName: this.books.find(item => item.id === this.borrowInfo[i].bookId).name,
          personId: this.borrowInfo[i].personId,
          personName: this.borrowInfo[i].personName,
          startDate: `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
          endDate: `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`,
          borrowState: this.borrowInfo[i].state
        })
      }
      return res
    }
  }
}
</script>

<style scoped>

</style>
