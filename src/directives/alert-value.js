// 自定义全局指令函数，并导出
const alertValue = {
    // 当被绑定的元素挂载到 DOM 上时调用
    mounted(el, binding) {
      el.addEventListener('click', () => {
        alert(binding.value.message);
      });
    }
};

export default alertValue