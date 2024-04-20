<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--Demo A-->
    <router-link to="/demoA">Demo A: 自定义公共指令</router-link>

    <br/>
    <!--Demo B-->
    <router-link to="/demoB">Demo B: 弹窗组件封装</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: '哈哈'//父组件没传值就设置默认
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
