<template>
  <div id="app">
    <tab></tab>
    <router-view />
    <foot></foot>
  </div>
</template>
<script>
import Tab from 'components/tab/tab'
import Foot from 'src/components/foot/foot'

export default {
  components: {
    Tab,
    Foot
  }
}
</script>

<style lang="less">
</style>
