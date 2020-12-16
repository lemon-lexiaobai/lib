<template>
  <div>
    <p>新增图书</p>
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules = "rules"
      :label-col="{span: 5}"
      :wrapper-col="{span: 12}"
      @submit="handleSubmit"
    >
      <a-form-model-item label="图书编号"  prop="id">
        <a-input v-model="form.id"></a-input>
      </a-form-model-item>
      <a-form-model-item label="图书名称" prop="name">
        <a-input v-model="form.name"></a-input>
      </a-form-model-item>
      <a-form-model-item label="出版社信息" prop="press">
        <a-input v-model="form.press"></a-input>
      </a-form-model-item>
      <a-form-model-item label="书籍分类" prop="category">
        <a-select v-model="form.category">
          <a-select-option v-for="item in categories" :value="item.id" :key="item.id">{{item.name}}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{span: 12, offset: 5}">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { getCategory, insertBook } from 'common/js/cache'
import Book from 'common/js/book'

export default {
  name: 'increase',
  data() {
    return {
      categories: [],
      form: {},
      rules: {
        id: [
          { required: true, message: 'Please input Book id', trigger: 'blur' }
        ],
        name: [
          { required: true, message: 'Please input Book Name', trigger: 'blur' }
        ],
        press: [
          { required: true, message: 'Please input Book Press', trigger: 'blur' }
        ],
        category: [
          { required: true, message: 'Please choose Book Category', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory() {
      this.categories = getCategory()
    },
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.insertBook()
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    insertBook() {
      let book = new Book(this.form)
      insertBook(book)
      this.$message.success('新增图书成功！')
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style scoped>

</style>
