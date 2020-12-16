<template>
  <div>
    <a-page-header
      title="图书管理"
      style="border: 1px solid rgb(235, 237, 240)"
    />
    <a-col :span="16" :offset="4">
      <a-table :columns="columns" :data-source="book">
        <span slot="category" slot-scope="category">
          <a-tag color="green">
            {{cate(category)}}
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
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: 'name',
    dataIndex: 'name'
  },
  {
    title: 'press',
    dataIndex: 'press'
  },
  {
    title: 'category',
    dataIndex: 'category',
    scopedSlots: { customRender: 'category' }
  },
  {
    title: 'state',
    dataIndex: 'state'
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
    }
  }
}
</script>

<style scoped>

</style>
