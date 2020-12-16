<template>
  <div class="wrapper">
    <div class="block" @click="selectItem('book')">
      <a-icon class="icon" type="appstore" theme="twoTone" />
      <p class="text">图书管理</p>
    </div>
    <div class="block" @click="selectItem('increase')">
      <a-icon class="icon" type="book" theme="twoTone" />
      <p class="text">新增图书</p>
    </div>
    <div class="block" @click="selectItem('library')">
      <a-icon class="icon" type="database" theme="twoTone" />
      <p class="text">借阅信息</p>
    </div>
    <div class="block" @click="selectItem('borrow')">
      <a-icon class="icon" type="interaction" theme="twoTone" />
      <p class="text">借&nbsp;阅</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    selectItem(item) {
      this.$router.push(item)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    position: fixed;
    top: 60px;
    bottom: 50px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .block{
    position: relative;
    width: 150px;
    height: 170px;
    border: 1px solid #ccc;
    border-radius: 15px;
    flex-shrink: 0;
  }
  .block:hover{
    box-shadow: 0px 15px 10px -15px #000;
  }
  .icon{
    position: relative;
    margin-left: 35px;
    margin-top: 15px;
  }
  .text{
    position: relative;
    height: 75px;
    text-align: center;
    font-size: 18px;
    line-height: 75px;
  }
  .wrapper >>> .anticon {
    font-size: 80px;
  }
</style>
