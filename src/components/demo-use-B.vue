<template>
  <!-- <button @click="signPopup('我是内容from sign-popup.js')">显示弹窗</button> -->
  <button @click="signPopup('我是内容from sign-popup.jsx',{
    confirm:() => {
        console.log('同意')
    },
    cancel:() => {
        console.log('不同意')
    }
  })">显示弹窗</button>
</template>


<script setup>
// import {signPopup} from '../common-components/sign-popup' //要加大括号，不然会报错
import {signPopup} from '../common-components/sign-popup.jsx' //要加大括号，不然会报错
</script>

<style>

</style>