import { createApp } from 'vue'
import App from './App.vue'

// 自定义指令函数
const customDirective = {
    // 当被绑定的元素挂载到 DOM 上时调用
    mounted(el, binding) {
      el.addEventListener('click', () => {
        alert(binding.value.message);
      });
    }
};

const app = createApp(App);
app.directive('custom', customDirective)
app.mount('#app')
