<template>
    <div class="wrapper">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home" @click="clickItem" class="menu-head">图书管理系统</a-menu-item>
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
  methods: {
    clickItem(item) {
      this.$router.push(item.key)
    }
  },
  computed: {
    current: {
      /**
       * 改为写在computed的原因：
       *    实现了两个导航入口，如果点击下面的导航进行跳转，页面会跳转，但导航条的高亮不会改变
       *    但导航跳转时，this.$route一定会改变，根据computed的特性，我们可以在this.$route中获取当前路径更新到current中
       *    导航使用的是v-model对current进行绑定，代表可以对current进行读取和写入，使用computed默认写法会导致没有写入的方法
       * */
      get() {
        return this.$route.path.substring(1) ? [this.$route.path.substring(1)] : ['home']
      },
      set() {}
    }
  }
}
</script>

<style scoped>
  .wrapper{
    padding: 6px 0 6px 0;
  }
  .menu-head{
    margin-left: 50px
  }
</style>
