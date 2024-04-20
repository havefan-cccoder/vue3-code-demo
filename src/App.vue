<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <HomePage msg="Welcome to Your Vue.js App"/>

    <!--Demo A-->
    <router-link to="/demoA">Demo A: 自定义公共指令</router-link>

    <br/>
    <!--Demo B-->
    <router-link to="/demoB">Demo B: 弹窗组件封装</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
import HomePage from './components/home-page.vue'

export default {
  name: 'App',
  components: {
    HomePage
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
