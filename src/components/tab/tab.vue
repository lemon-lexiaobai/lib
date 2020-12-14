<template>
    <div>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home" @click="clickItem">图书管理系统</a-menu-item>
        <a-menu-item key="book" @click="clickItem">图书管理</a-menu-item>
        <a-menu-item key="increase" @click="clickItem">新增图书</a-menu-item>
        <a-menu-item key="library" @click="clickItem">借阅信息管理</a-menu-item>
        <a-menu-item key="borrow" @click="clickItem">借阅</a-menu-item>
      </a-menu>
    </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      current: [this.$route.path.substring(1)]
    }
  },
  methods: {
    clickItem(item) {
      this.$router.push(item.key)
    }
  }
}
</script>

<style scoped>

</style>
