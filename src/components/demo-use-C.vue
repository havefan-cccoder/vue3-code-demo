<template>
  这是demo C
  <div>
    <button @click="() => {popShow = true}">显示弹窗</button>
  </div>
  <!--这里的v-model相当于给子组件传了一个名为modelValue的props-->
  <pop-up v-model="popShow">
  <!-- <pop-up v-if="popShow" @hidden="hidePopup"> -->
    <div>我是一个内容</div>
  </pop-up>
</template>
<script setup>
import { ref } from 'vue'
import popUp from './pop-up.vue'
let popShow = ref(false);
</script>
<!-- <script>
import popUp from './pop-up.vue'
export default {
  name: 'demoC',
  components: {
    popUp
  },
  data() {
    return {
      popShow:false//控制子组件显隐
    }
  },
  methods: {
    // 接收子组件的事件，来更改变量，这里就用不到了
    // hidePopup() {
    //   this.popShow = false;
    // }
  }
}
</script> -->

<style>

</style>