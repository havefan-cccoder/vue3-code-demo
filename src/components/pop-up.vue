<template>
  <!--直接用style控制显隐-->
  <div :style="{'display':modelValue ? 'block' : 'none'}">
    <slot></slot>
    <button @click="hidden">取消</button>
    <button @click="hidden">确定</button>
  </div>
</template>

<script >
export default {
    props: {
      // 这个props相当于省略了父组件的v-if和监听事件
      modelValue:{
        type: Boolean,
        default:false
      }
    },
    methods:{
      hidden() {
        this.$emit('update:modelValue',false)//v-model的传值，给父组件的，就是靠这个update:modelValue，因此不需要父组件那边定义新的事件了
        // this.$emit('hidden')
      }
    }
}
</script>

<style>

</style>