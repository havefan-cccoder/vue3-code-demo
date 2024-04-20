<template>
  <!--A:自定义公共指令之——使用指令：alertValue-->
  <div v-alertValue="{ message: 'Hello from alertValue directive!' }">
      Click me to trigger the directive!
    </div>
    <!--A:自定义公共指令之——使用指令：autoFocus-->
    <input type="text" v-autoFocus>
    <!--A:自定义公共指令之——使用指令：pinIt-->
    <img src="../assets/logo.png" alt="" srcset="" v-pinIt:warning.right.top="true">
</template>

<script>
export default {

}
</script>

<style>

</style>