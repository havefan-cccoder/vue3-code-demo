<template>
  <!--这里的内容是显示到所有页面的公共部分，不需要就删掉。可以设置默认路由，选择某个vue文件作为默认展示的“首页”-->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div> -->

  <!--所有的的router-link，或者说配置的路由页面最终呈现在这里-->
  <router-view></router-view>
</template>

<script>
// import HomePage from './components/home-page.vue'

export default {
  name: 'App',
  components: {
    // HomePage
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
