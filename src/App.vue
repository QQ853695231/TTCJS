<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" @click="onClick">3333333</el-button>
    {{result}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {doSearch} from '@/api/music'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: null
    }
  },
  methods: {
    async onClick() {
      const res = await doSearch()
      this.result = res.data.result
      this.$message.success("查询成功")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
