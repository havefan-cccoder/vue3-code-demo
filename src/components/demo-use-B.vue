<template>
  <button @click="signPopup('我是内容')">显示弹窗</button>
</template>


<script setup>
import {signPopup} from '../common-components/sign-popup' //要加大括号，不然会报错
</script>

<style>

</style>