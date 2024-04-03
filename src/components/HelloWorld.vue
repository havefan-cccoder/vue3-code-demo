<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-alertValue="{ message: 'Hello from alertValue directive!' }">
      Click me to trigger the directive!
    </div>
    <input type="text" v-autoFocus>
    <img src="../assets/logo.png" alt="" srcset="" v-pinIt:warning.right.top="true">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
