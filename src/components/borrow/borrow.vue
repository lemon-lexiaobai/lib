<template>
    <div>
      <p>借阅</p>
      <a-form-model
        ref="borrowForm"
        :model="borrowInfo"
        :rules="rules"
        :label-col="{span: 5}"
        :wrapper-col="{span: 12}"
        @submit="handleSubmit"
      >
        <a-form-model-item label="借阅图书" prop="bookId">
          <a-select v-model="borrowInfo.bookId">
            <a-select-option
              v-for="book in books"
              :value="book.id"
              :key="book.id"
            >
              {{book.name}}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="借阅人ID" prop="personId">
          <a-input v-model="borrowInfo.personId"></a-input>
        </a-form-model-item>
        <a-form-model-item label="借阅人" prop="personName">
          <a-input v-model="borrowInfo.personName"></a-input>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{span: 12, offset: 5}">
          <a-button type="primary" html-type="submit">submit</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
</template>

<script>
import { bookNotBorrow, updateBook, insertBorrow } from 'common/js/cache'

const rules = {
  personId: [
    { required: true, message: 'Please input person id', trigger: 'blur' }
  ],
  personName: [
    { required: true, message: 'Please input person name', trigger: 'blur' }
  ]
}

export default {
  name: 'borrow',
  data() {
    return {
      borrowInfo: {},
      books: [],
      rules
    }
  },
  created() {
    this._getBooks()
  },
  methods: {
    _getBooks() {
      this.books = bookNotBorrow()
    },
    handleSubmit() {
      this.$refs.borrowForm.validate(valid => {
        if (valid) {
          this.borrowBook(this.borrowInfo)
        } else {
          return false
        }
      })
    },
    borrowBook(info) {
      let date = new Date()
      info.startDate = date
      info.endDate = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000)
      info.borrowId = `${date.getTime()}${info.bookId}${info.personId}`
      info.state = 1
      updateBook(info.bookId, 0)
      insertBorrow(info)
      this.$message.success('借阅图书成功')
      this.$refs.borrowForm.resetFields()
    }
  }
}
</script>

<style scoped>

</style>
