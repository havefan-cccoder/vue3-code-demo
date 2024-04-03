import { createApp } from 'vue'
import App from './App.vue'
import installDirectives from './directives'

// // 自定义全局指令函数
// const customDirective = {
//     // 当被绑定的元素挂载到 DOM 上时调用
//     mounted(el, binding) {
//       el.addEventListener('click', () => {
//         alert(binding.value.message);
//       });
//     }
// };

// //自定义全局指令函数2
// const autoFocus = {
//     // 当被绑定的元素挂载到 DOM 上时调用
//     mounted(el) {
//         el.focus();
//     }
// }
const app = createApp(App);
// app.directive('alertvalue', customDirective)
// app.directive('autofocus', autoFocus)
/**
 * 使用use调用install方法，然后把多个全局方法注册到全局
 * 用来把上面写到的代码提取到一个文件夹里
 */
app.use(installDirectives)
app.mount('#app')
