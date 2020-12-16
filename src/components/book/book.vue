<template>
  <div>
    <a-page-header
      title="图书管理"
      style="border: 1px solid rgb(235, 237, 240)"
    />
    <a-col :span="16" :offset="4">
      <a-table :rowKey="record => record.id" :columns="columns" :data-source="book">
        <span slot="category" slot-scope="category">
          <a-tag color="green">
            {{cate(category)}}
          </a-tag>
        </span>
        <span slot="state" slot-scope="state">
          <a-tag :color="getState(state).color">
            {{getState(state).desc}}
          </a-tag>
        </span>
      </a-table>
    </a-col>
  </div>
</template>

<script>
import { getBook, getCategory } from 'common/js/cache'

const columns = [
  {
    title: '图书编号',
    dataIndex: 'id'
  },
  {
    title: '图书名称',
    dataIndex: 'name'
  },
  {
    title: '图书出版社',
    dataIndex: 'press'
  },
  {
    title: '图书分类',
    dataIndex: 'category',
    scopedSlots: { customRender: 'category' }
  },
  {
    title: '图书状态',
    dataIndex: 'state',
    scopedSlots: { customRender: 'state' }
  }
]

const staRela = [
  {
    desc: '已借出',
    color: 'geekblue'
  },
  {
    desc: '在库',
    color: 'green'
  },
  {
    desc: '已灭失',
    color: 'volcano'
  }
]

export default {
  name: 'book',
  data() {
    return {
      book: [],
      columns,
      categories: []
    }
  },
  created() {
    this._getBook()
    this._getCategory()
  },
  methods: {
    _getBook() {
      this.book = getBook()
    },
    _getCategory() {
      this.categories = getCategory()
    },
    cate(cateID) {
      let index = this.categories.findIndex(item => item.id === cateID)
      return this.categories[index].name
    },
    getState(state) {
      return staRela[state]
    }
  }
}
</script>

<style scoped>

</style>
